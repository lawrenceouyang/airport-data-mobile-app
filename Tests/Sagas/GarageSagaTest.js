/**
 * Created by aayush.bhandari on 7/11/17.
 */
import FixtureAPI from '../../App/Services/FixtureApi';
import { put, call } from 'redux-saga/effects';
import { getGarageData, searchGarageData, getGarageOccupancyData } from '../../App/Sagas/GarageSagas';
import GarageActions from '../../App/Redux/GarageRedux';
import { GarageTransform } from '../../App/Transforms/GarageTransform';
// import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value;

test('all garages API', () => {
  const step = stepper(getGarageData(FixtureAPI));
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getGarages))
});

test('all garages success', () => {
  const response = FixtureAPI.getGarages();
  const step = stepper(getGarageData(FixtureAPI));
  // first step API
  step();
  // Second step successful return
  const stepResponse = step(response);
  // Get the data from the response
  expect(stepResponse).toEqual(put(GarageActions.garageSuccess(GarageTransform(response.data.garages))))
});

test('all garages fail', () => {
  const response = {ok: false};
  const step = stepper(getGarageData(FixtureAPI));
  // first step API
  step();
  // Second step failed response
  expect(step(response)).toEqual(put(GarageActions.garageFailure()))
});

test('garage occupancy API', () => {
  const garage_uuid = '7e65be9a-e82e-43fd-a981-c883045bfb1d';
  const step = stepper(getGarageOccupancyData(FixtureAPI, {'garage_uuid': garage_uuid}));
  expect(step()).toEqual(call(FixtureAPI.getGarageOccupancy, garage_uuid));
});

test('garage occupancy success', () => {
  const garage_uuid = '7e65be9a-e82e-43fd-a981-c883045bfb1d';
  const response = FixtureAPI.getGarageOccupancy(garage_uuid);
  const step = stepper(getGarageOccupancyData(FixtureAPI, {'garage_uuid': garage_uuid}));
  step();
  const stepResponse = step(response);
  expect(stepResponse).toEqual(put(GarageActions.garageOccupancySuccess(response.data)))
});
