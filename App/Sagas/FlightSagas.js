/**
 * Created by aayush.bhandari on 7/11/17.
 */
import { call, put } from 'redux-saga/effects'
import FlightActions from '../Redux/FlightRedux'
import FlightTransform from '../Transforms/FlightTransform'
import R from 'ramda'


export function * getFlightData (api, action) {
  // Make API Call
  const {terminal, mode} = action;
  const response = yield call(api.getFlights, terminal, mode);
  if (response.ok) {
    try {
      let data = FlightTransform(response.data.response.flights);
      if (data===undefined){
        yield put(FlightActions.flightFailure("Error"));
      }
      else
      {
        yield put(FlightActions.flightSuccess(data));
      }
    }
    catch(err) {
      yield put(FlightActions.flightFailure("Error"));
    }
  } else {
    /* todo Pass the actual error from the api call instead of the string "Error" */
    yield put(FlightActions.flightFailure("Error"));
  }
}

export function * searchFlightData (api, action) {
  let {flight_number, airline_name} = action;
  let matches_flight_number = R.propSatisfies(x => (R.toLower(x)).includes(R.toLower(flight_number)), "base_flight");
  let matches_airline_name =  R.propSatisfies(x => (R.toLower(x)).includes(R.toLower(airline_name)), "base_airline_name");
  // Check if flight number and airline names are being passed in
  flight_number = (flight_number === null || flight_number === undefined || flight_number === '') ? "|" : flight_number;
  airline_name = (airline_name === null || airline_name === undefined || airline_name === '')  ? "|" : airline_name;
  // Make API Call
  const response = yield call(api.searchFlights);
  if (response.ok) {
    try {
      let data = FlightTransform(response.data.response.flights); //Transform flights to include city name and logo
      if (data===undefined){
        yield put(FlightActions.flightFailure("Error"));
      }
      else {
        // Get the search results of the flights and update the redux store
        let result = (flight_number === "|" || airline_name === "|") ? R.union(R.filter(matches_flight_number)(data), R.filter(matches_airline_name)(data)) : R.intersection(R.filter(matches_flight_number)(data), R.filter(matches_airline_name)(data));
        yield put(FlightActions.flightSearchSuccess(result));
      }
    }
    catch(err) {
      yield put(FlightActions.flightFailure("Error"));
    }

  } else {
    /* todo Pass the actual error from the api call instead of the string "Error" */
    yield put(FlightActions.flightFailure("Error"));
  }
}
