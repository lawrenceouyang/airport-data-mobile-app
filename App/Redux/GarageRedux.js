import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  garageRequest: null,
  garageSuccess: ["data"],
  garageOccupancyRequest: ["garage_uuid"],
  garageOccupancySuccess: ["occupancy_data"],
  garageFailure: null,
  garageClear: null,
});

export const GarageTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  processing: false,
  data: null,
  error: null
});

/* ------------- State Modifier Functions -------------- */
// Find the index of the garage that the data belongs to in the state
// Attempted to use R.findIndex(R.propEq('garage_uuid', state.garage_uuid))(state.data)
// But did not work for some reason (despite working on REPL on ramdajs site)
const find_garage_occupancy_index = (data, garage_uuid) => {
  for (garage in data) {
    if (data[garage]['garage_uuid'] === garage_uuid) {
      return garage;
    }
  }
  return -1;
}

// Copy the garage data and the occupancy data, then merge the objects together
const merge_individual_garage_data = (data, index, new_value) => {
  //console.tron.log(new_value);
  const new_garage_data = Object.assign({}, data[index], new_value);
  const new_data = [...data];
  new_data[index] = new_garage_data;
  return new_data;
}

const update_occupancy_fetch = (data, garage_uuid, fetch_state) => {
  const index = find_garage_occupancy_index(data, garage_uuid);
  if (index !== -1) {
    return merge_individual_garage_data(data, index, { fetching: fetch_state })
  }
  return data;
}

const merge_occupancy_data = (state, occupancy_data) => {
  if (state.data === null)
    return state.data;
  const index = find_garage_occupancy_index(state.data, occupancy_data['garage_uuid']);
  console.tron.log(index);
  if (index !== -1) {
    return merge_individual_garage_data(state.data, index, occupancy_data)
  }
  return data;
};

/* ------------- Reducers ------------- */

// we're attempting to retrieve the garage data
export const request = (state) =>
  state.merge({fetching: false});

// we've successfully retrieved the garage data
export const success = (state, {data}) =>
  state.merge({fetching: false, error: null, data});

export const occupancy_request = (state, {garage_uuid}) =>
  state.merge({ data: update_occupancy_fetch(state.data, garage_uuid, true) });

export const occupancy_success = (state, {occupancy_data}) =>
    state.merge({ data: merge_occupancy_data(state, occupancy_data) });

// we've had a problem retrieving the garage data
export const failure = (state) =>
  state.merge({fetching: false, error: true});

export const clear = state =>
  state.merge({data: null})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GARAGE_REQUEST]: request,
  [Types.GARAGE_SUCCESS]: success,
  [Types.GARAGE_OCCUPANCY_REQUEST]: occupancy_request,
  [Types.GARAGE_OCCUPANCY_SUCCESS]: occupancy_success,
  [Types.GARAGE_FAILURE]: failure,
  [Types.GARAGE_CLEAR]: clear,
});
