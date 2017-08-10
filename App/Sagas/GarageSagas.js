import { call, put } from 'redux-saga/effects';
import GarageActions from '../Redux/GarageRedux';
import { GarageTransform, OccupancyTransform } from '../Transforms/GarageTransform';

// import R from 'ramda'

export function * getGarageData(api) {
  // Make API Call
  const response = yield call(api.getGarages);
  if (response.ok) {
    const data = GarageTransform(response.data.garages);
    //console.tron.log(data);
    yield put(GarageActions.garageSuccess(data));
  } else {
    /* todo Pass the actual error from the api call instead of the string 'Error' */
    yield put(GarageActions.garageFailure('Error'));
  }
}

// export function * searchGarageData() {
//   yield put(GarageActions.garageSearchSuccess());
// }

// export function * searchGarageData (api, action) {
//   let {garage_name} = action;
//   // Check if garage_name is being passed in
//   if (garage_name === null || garage_name === undefined)
//     garage_name = '';
//   // Make API Call
//   const response = yield call(api.getGarages);
//   if (response.ok) {
//     const data = GarageTransform(response.data.garages);
//     // Get the search results of the garages and update the redux store
//     const matches_garage_name = R.propSatisfies(x =>
//        (R.toLower(x)).includes(R.toLower(garage_name)), 'garage_name');
//     const result = R.filter(matches_garage_name)(data);
//     yield put(GarageActions.garageSearchSuccess(result));
//   } else {
//     /* todo Pass the actual error from the api call instead of the string 'Error' */
//     yield put(GarageActions.garageFailure('Error'));
//   }
// }

export function * getGarageOccupancyData(api, action) {
  let { garage_uuid } = action;
  const response = yield call(api.getGarageOccupancy, garage_uuid);
  if (response.ok) {
    const data = OccupancyTransform(response.data);
    yield put(GarageActions.garageOccupancySuccess(data));
  } else
  {
    yield put(GarageActions.garageFailure('Error'));
  }
}
