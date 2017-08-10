/**
 * Created by aayush.bhandari on 7/11/17.
 */
import { call, put } from 'redux-saga/effects';
import FavoriteActions from '../Redux/FavoriteRedux';
import FlightTransform from '../Transforms/FlightTransform';
import R from 'ramda';

export function* saveFlight() {
  yield put(FavoriteActions.flightSaveSuccess());
}

export function* deleteFlight() {
  yield put(FavoriteActions.flightDeleteSuccess());
}

export function* updateFlights(api, action) {
  const response = yield call(api.getFlights, null, null);
  if (response.ok) {
    const data = FlightTransform(response.data.response.flights);
    let favoriteFlights = [];
    let flightNumbers = [];
    for (let i = 0; i < R.length(action.flight_numbers); i++) {
      const flight = R.find(R.propEq('base_flight', action.flight_numbers[i]))(data);
      if (flight !== undefined) {
        favoriteFlights = [...favoriteFlights, flight];
        flightNumbers = [...flightNumbers, action.flight_numbers[i]];
      }
    }
    yield put(FavoriteActions.flightUpdateSuccess(favoriteFlights, flightNumbers));
  } else {
    /* todo Pass the actual error from the api call instead of the string "Error" */
    yield put(FlightActions.flightFailure('Error'));
  }
}

export function* syncFlights(action) {}
