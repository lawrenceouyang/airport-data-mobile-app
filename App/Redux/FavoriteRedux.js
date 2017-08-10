/**
 * Created by aayush.bhandari on 7/17/17.
 */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import R from 'ramda';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  flightSaveRequest: ['flight'],
  flightSaveSuccess: null,
  flightDeleteRequest: ['flight_number'],
  flightDeleteSuccess: null,
  flightUpdateSavedFlights: ['flight_numbers'],
  flightUpdateSuccess: ['flights', 'flight_numbers'],
});

export const FavoriteTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

// mode refers to arrival/departures for now.. subject to change. We will refactor accordingly.
// terminal is the terminalNumber, use 4 for international terminal
export const INITIAL_STATE = Immutable({
  error: null,
  fetching: false,
  favorite_flight_numbers: [],
  favorite_flights: [],
  updated_timestamp: null,
});

/* ------------- Reducers ------------- */
// we're attempting to save flight data that needs to be favorite
export const flight_save_request = (state, { flight }) =>
  state.merge({
    fetching: true,
    favorite_flights: [...state.favorite_flights, flight],
    favorite_flight_numbers: [...state.favorite_flight_numbers, flight.base_flight],
  });

// we're successful at saving fav flight
export const flight_save_success = state => state.merge({ fetching: false });

// we're attempting to delete flight data from favorite
export const flight_delete_request = (state, { flight_number }) =>
  state.merge({
    fetching: true,
    favorite_flights: state.favorite_flights.filter(item => flight_number !== item.base_flight),
    favorite_flight_numbers: state.favorite_flight_numbers.filter(item => flight_number !== item),
  });

// we're successful at deleting fav flight
export const flight_delete_success = state => state.merge({ fetching: false });

// attempting to update the flights in favorite flights
export const flight_update_saved_flights_request = (state, { flight_numbers }) =>
  state.merge({ fetching: true });

// successful at updating the flights in favorite flights
export const flight_update_success = (state, { flights, flight_numbers }) => {
  // to avoid sync issue, update the object with the current state of the flights
  let favoriteFlights = [];
  let flightNumbers = [];
  for (let i = 0; i < R.length(state.favorite_flight_numbers); i++) {
    const flight = R.find(R.propEq('base_flight', state.favorite_flight_numbers[i]))(flights);
    if (flight !== undefined) {
      favoriteFlights = [...favoriteFlights, flight];
      flightNumbers = [...flightNumbers, state.favorite_flight_numbers[i]];
    }
  }
  return state.merge({
    fetching: false,
    favorite_flights: favoriteFlights,
    favorite_flight_numbers: flightNumbers,
    updated_timestamp: new Date(),
  });
};

// we've had a problem retrieving the flight data
export const failure = state => state.merge({ saving: false, error: true });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FLIGHT_SAVE_REQUEST]: flight_save_request,
  [Types.FLIGHT_SAVE_SUCCESS]: flight_save_success,
  [Types.FLIGHT_DELETE_REQUEST]: flight_delete_request,
  [Types.FLIGHT_DELETE_SUCCESS]: flight_delete_success,
  [Types.FLIGHT_UPDATE_SAVED_FLIGHTS]: flight_update_saved_flights_request,
  [Types.FLIGHT_UPDATE_SUCCESS]: flight_update_success,
});

/* ------------- Selectors ------------- */

// Check if a given flight number is a favorite
export const isFavoriteFlight = (favoriteState, flightNumber) =>
  R.contains(flightNumber, favoriteState.favorite_flight_numbers);
