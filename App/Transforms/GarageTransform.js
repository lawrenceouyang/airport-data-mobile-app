export const GarageTransform = (garageData: array) => {
  for (let garage in garageData) {
    if (garageData[garage]['garage_name'] === null) {
      garageData[garage]['garage_name'] = ''
    }
    garageData[garage]['fetching'] = false;
  }
  return garageData
}

export const OccupancyTransform = (occupancyData: object) => {
  occupancyData['fetching'] = false;
  return occupancyData;
}
