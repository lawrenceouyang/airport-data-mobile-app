export const CheckpointTransform = (checkpointData: array) => {
  for (let checkpoint in checkpointData) {
    if (checkpointData[checkpoint]['checkpoint_name'] === null) {
      checkpointData[checkpoint]['checkpoint_name'] = ''
    }
    checkpointData[checkpoint]['fetching'] = false;
  }
  return checkpointData
}

export const WaitTimeTransform = (waitTimeData: object) => {
  waitTimeData['fetching'] = false;
  return waitTimeData;
}
