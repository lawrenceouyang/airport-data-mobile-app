import { takeLatest, takeEvery } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { FlightTypes } from '../Redux/FlightRedux';
import { FavoriteTypes } from '../Redux/FavoriteRedux';
import { GarageTypes } from '../Redux/GarageRedux';
import { CheckpointTypes } from '../Redux/CheckpointRedux';

/* ------------- Sagas ------------- */

import { getFlightData, searchFlightData } from './FlightSagas';
import { saveFlight, deleteFlight, updateFlights } from './FavoriteSagas';
import { getGarageData, getGarageOccupancyData } from './GarageSagas';
import { getCheckpointData, getCheckpointWaitTimeData } from './CheckpointSagas';
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();
const fixtureApi = FixtureAPI;

/* ------------- Connect Types To Sagas ------------- */

// some sagas only receive an action
// some sagas receive extra parameters in addition to an action
export default function* root() {
  yield [
    takeLatest(FlightTypes.FLIGHT_REQUEST, getFlightData, api),
    takeLatest(FlightTypes.FLIGHT_SEARCH_REQUEST, searchFlightData, api),
    takeLatest(FavoriteTypes.FLIGHT_SAVE_REQUEST, saveFlight),
    takeLatest(FavoriteTypes.FLIGHT_DELETE_REQUEST, deleteFlight),
    takeLatest(FavoriteTypes.FLIGHT_UPDATE_SAVED_FLIGHTS, updateFlights, api),
    takeLatest(GarageTypes.GARAGE_REQUEST, getGarageData, api),
    takeEvery(GarageTypes.GARAGE_OCCUPANCY_REQUEST, getGarageOccupancyData, api),
    takeLatest(CheckpointTypes.CHECKPOINT_REQUEST, getCheckpointData, api),
    takeEvery(CheckpointTypes.CHECKPOINT_WAIT_TIME_REQUEST, getCheckpointWaitTimeData, api),
  ];
}
