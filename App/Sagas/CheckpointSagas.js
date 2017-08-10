import { call, put } from 'redux-saga/effects';
import CheckpointActions from '../Redux/CheckpointRedux';
import { CheckpointTransform, WaitTimeTransform } from '../Transforms/CheckpointTransform';

export function * getCheckpointData(api) {
  // Make API Call
  const response = yield call(api.getCheckpoints);
  if (response.ok) {
    const data = CheckpointTransform(response.data.checkpoints);
    yield put(CheckpointActions.checkpointSuccess(data));
  } else {
    /* todo Pass the actual error from the api call instead of the string 'Error' */
    yield put(GarageActions.checkpointFailure('Error'));
  }
}

export function * getCheckpointWaitTimeData(api, action) {
  const { checkpoint_uuid } = action;
  const response = yield call(api.getCheckpointWaitTime, checkpoint_uuid);
  if (response.ok) {
    const data = WaitTimeTransform(response.data);
    yield put(CheckpointActions.checkpointWaitTimeSuccess(data));
  } else
  {
    yield put(CheckpointActions.checkpointFailure('Error'));
  }
}
