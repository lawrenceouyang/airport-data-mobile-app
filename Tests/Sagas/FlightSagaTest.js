/**
 * Created by aayush.bhandari on 7/11/17.
 */
import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { getFlightData } from '../../App/Sagas/FlightSagas'
import FlightActions from '../../App/Redux/FlightRedux'
import FlightTransform from '../../App/Transforms/FlightTransform'
// import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value;

test('first calls API', () => {
  const step = stepper(getFlightData(FixtureAPI, {"terminal":1, "mode": "arrivals"}));
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getFlights, 1, "arrivals"))
});

test('success path', () => {
  const response = FixtureAPI.getFlights(1, "arrivals");
  const step = stepper(getFlightData(FixtureAPI, {"terminal":1, "mode": "arrivals"}));
  // first step API
  step();
  // Second step successful return
  const stepResponse = step(response);
  // Get the data from the response
  expect(stepResponse).toEqual(put(FlightActions.flightSuccess(FlightTransform(response.data.response.flights))))
});

test('failure path', () => {
  const response = {ok: false};
  const step = stepper(getFlightData(FixtureAPI, {"terminal":1, "mode": "arrivals"}));
  // first step API
  step();
  // Second step failed response
  expect(step(response)).toEqual(put(FlightActions.flightFailure()))
});


