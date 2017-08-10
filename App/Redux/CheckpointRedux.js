import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  checkpointRequest: null,
  checkpointSuccess: ["data"],
  checkpointWaitTimeRequest: ["checkpoint_uuid"],
  checkpointWaitTimeSuccess: ["wait_time_data"],
  checkpointFailure: null,
  checkpointClear: null,
});

export const CheckpointTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  data: null,
  checkpoint_name: null,
  error: null
});

/* ------------- State Modifier Functions -------------- */
// Find the index of the checkpoint that the data belongs to in the state
const find_checkpoint_wait_time_index = (data, checkpoint_uuid) => {
  for (checkpoint in data) {
    if (data[checkpoint]['checkpoint_uuid'] === checkpoint_uuid) {
      return checkpoint;
    }
  }
  return -1;
}

// Copy the checkpoint data and the wait_time data, then merge the objects together
const merge_individual_checkpoint_data = (data, index, new_value) => {
  console.tron.log(new_value);
  const new_checkpoint_data = Object.assign({}, data[index], new_value);
  const new_data = [...data];
  new_data[index] = new_checkpoint_data;
  return new_data;
}

const update_wait_time_fetch = (data, checkpoint_uuid, fetch_state) => {
  const index = find_checkpoint_wait_time_index(data, checkpoint_uuid);
  if (index !== -1) {
    return merge_individual_checkpoint_data(data, index, { fetching: fetch_state })
  }
  return data;
}

const merge_wait_time_data = (state, wait_time_data) => {
  if (state.data === null)
    return state.data;
  const index = find_checkpoint_wait_time_index(state.data, wait_time_data['checkpoint_uuid']);
  console.tron.log(index);
  if (index !== -1) {
    return merge_individual_checkpoint_data(state.data, index, wait_time_data)
  }
  return data;
};

/* ------------- Reducers ------------- */

// we're attempting to retrieve the checkpoint data
export const request = state =>
  state.merge({fetching: true});

// we've successfully retrieved the checkpoint data
export const success = (state, { data }) =>
  state.merge({fetching: false, error: null, data});

export const wait_time_request = (state, { checkpoint_uuid }) =>
  state.merge({ data: update_wait_time_fetch(state.data, checkpoint_uuid, true) });

export const wait_time_success = (state, { wait_time_data }) =>
    state.merge({ data: merge_wait_time_data(state, wait_time_data) });

// we've had a problem retrieving the checkpoint data
export const failure = state =>
  state.merge({fetching: false, error: true});

export const clear = state =>
  state.merge({data: null});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHECKPOINT_REQUEST]: request,
  [Types.CHECKPOINT_SUCCESS]: success,
  [Types.CHECKPOINT_WAIT_TIME_REQUEST]: wait_time_request,
  [Types.CHECKPOINT_WAIT_TIME_SUCCESS]: wait_time_success,
  [Types.CHECKPOINT_FAILURE]: failure,
  [Types.CHECKPOINT_CLEAR]: clear,
});
