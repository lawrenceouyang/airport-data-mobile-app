import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    flight: require('./FlightRedux').reducer,
    favorite: require('./FavoriteRedux').reducer,
    garage: require('./GarageRedux').reducer,
    checkpoint: require('./CheckpointRedux').reducer,
  });

  return configureStore(rootReducer, rootSaga);
};
