/**
 * Created by aayush.bhandari on 7/10/17.
 */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import R from 'ramda';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  flightRequest: ['terminal', 'mode'],
  flightSearchRequest: ['flight_number', 'airline_name'],
  flightSuccess: ['data'],
  flightSearchSuccess: ['search_data'],
  flightFailure: null,
});

export const FlightTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

// mode refers to arrival/departures for now.. subject to change. We will refactor accordingly.
// terminal is the terminalNumber, use 4 for international terminal
export const INITIAL_STATE = Immutable({
  flight_number: null,
  airline_name: null,
  terminal: null,
  mode: null,
  data: null,
  search_data: null,
  error: null,
  fetching: false,
});

/* ------------- Reducers ------------- */

// we're attempting to retrieve the flight data
export const request = (state, { terminal, mode }) =>
  state.merge({ fetching: true, terminal, mode, flight_number: null, airline_name: null });

// we're attempting to retrieve the flight data that needs to be searched
export const search = (state, { flight_number, airline_name }) =>
  state.merge({ fetching: true, flight_number, airline_name, terminal: null, mode: null });

// we've successfully retrieved the flight data
export const success = (state, { data }) => state.merge({ fetching: false, error: null, data });

// we've successfully retrieved the flight data
export const search_success = (state, { search_data }) =>
  state.merge({ fetching: false, error: null, search_data });

// we've had a problem retrieving the flight data
export const failure = state => state.merge({ fetching: false, error: true });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FLIGHT_REQUEST]: request,
  [Types.FLIGHT_SEARCH_REQUEST]: search,
  [Types.FLIGHT_SEARCH_SUCCESS]: search_success,
  [Types.FLIGHT_SUCCESS]: success,
  [Types.FLIGHT_FAILURE]: failure,
});

/* ------------- Selectors ------------- */

// Total Number of flights retrieved
export const totalFlightsRetrieved = flightState =>
  (flightState.data !== null ? flightState.data.length : 0);

// Total Number of flights searched
export const totalFlightsSearched = flightState =>
  (flightState.data !== null ? flightState.search_data.length : 0);

// Sort Flights By Field
export const sortFlights = (flightState, field) => {
  const sortByCustomField = R.sortBy(R.compose(R.prop(field)));
  if (flightState.data !== null) {
    return sortByCustomField(flightState.data);
  }
};

// Sort Flights By Field
export const sortSearchFlights = (flightState, field) => {
  const sortByCustomField = R.sortBy(R.compose(R.prop(field)));
  if (flightState.search_data !== null) {
    return sortByCustomField(flightState.search_data);
  }
};
