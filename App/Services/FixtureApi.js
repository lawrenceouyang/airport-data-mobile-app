export default {
  // Functions return fixtures
  getRoot: () => ({
    ok: true,
    data: require('../Fixtures/root.json'),
  }),
  getRate: () => ({
    ok: true,
    data: require('../Fixtures/rateLimit.json'),
  }),
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../Fixtures/gantman.json');
    const skellockData = require('../Fixtures/skellock.json');
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData,
    };
  },

  getFlights: (terminal, mode) => {
    // If  mode and terminals are both missing provide all flights
    if ((mode === null || mode === undefined) && (terminal === null || terminal === undefined)) {
      return {
        ok: true,
        data: require('../Fixtures/Flights/all.json'),
      };
    } else if (!(mode === 'arrivals' || mode === 'departures') || (terminal < 1 || terminal > 4)) {
      // If mode is incorrect or terminal numbers are not 1-4 return error
      return {
        ok: false,
        error:
          'Incorrect mode/terminal supplied. Please supply arrivals or departures as flight modes.',
      };
    }

    // Get the fixture data path based on the terminal and mode value
    // todo checkout how to dynamically require files instead of a giant switch statement
    // let fixturePath= mode==="arrivals" ?
    //   '../Fixtures/Flights/Arrivals/t1.json' : '../Fixtures/Flights/Departures/t1.json'
    if (mode === 'arrivals') {
      switch (terminal) {
        case 1:
          return {
            ok: true,
            data: require('../Fixtures/Flights/Arrivals/t1.json'),
          };
        case 2:
          return {
            ok: true,
            data: require('../Fixtures/Flights/Arrivals/t2.json'),
          };
        case 3:
          return {
            ok: true,
            data: require('../Fixtures/Flights/Arrivals/t3.json'),
          };
        case 4:
          return {
            ok: true,
            data: require('../Fixtures/Flights/Arrivals/t4.json'),
          };
      } // End Switch
    } else {
      switch (terminal) {
        case 1:
          return {
            ok: true,
            data: require('../Fixtures/Flights/Departures/t1.json'),
          };
        case 2:
          return {
            ok: true,
            data: require('../Fixtures/Flights/Departures/t2.json'),
          };
        case 3:
          return {
            ok: true,
            data: require('../Fixtures/Flights/Departures/t3.json'),
          };
        case 4:
          return {
            ok: true,
            data: require('../Fixtures/Flights/Departures/t4.json'),
          };
      } // End Switch
    } // End If statement for Arrival/Departure
  },

  searchFlights: () => ({
      ok: true,
      data: require('../Fixtures/Flights/all.json'),
    }),

  getGarages: () => ({
      ok: true,
      data: require('../Fixtures/Garages/garages.json'),
    }),

  getGarageOccupancy: garageUuid => {
    if (garageUuid === null || garageUuid === undefined)
      return {
        ok: false,
        error: 'No garage uuid supplied. Please supply a garage uuid to obtain the occupancy.',
      };
    switch (garageUuid) {
      case '7e65be9a-e82e-43fd-a981-c883045bfb1d':
        return {
          ok: true,
          data: require('../Fixtures/Garages/1.json'),
        }; break;
      case '8b14dc5f-130c-4dbd-b362-a99d45c09ad3':
        return {
          ok: true,
          data: require('../Fixtures/Garages/2.json'),
        }; break;
      case '15736d64-4d2e-4be8-b791-b508682c5a2c':
        return {
          ok: true,
          data: require('../Fixtures/Garages/3.json'),
        }; break;
      default:
        return {
          ok: false,
          error: 'No garage data.',
        };
    }
  },

  getCheckpoints: () => ({
    ok: true,
    data: require('../Fixtures/Checkpoints/checkpoints.json'),
  }),

  getCheckpointWaitTime: checkpointUuid => {
    if (checkpointUuid === null || checkpointUuid === undefined)
      return {
        ok: false,
        error: 'No checkpoint UUID supplied.',
      };
    switch (checkpointUuid) {
      case 'f9fa7ee6-708c-43db-86dc-8d060dd6b08c':
        return {
          ok: true,
          data: require('../Fixtures/Checkpoints/1.json'),
        }; break;
      case '11afda6e-95f7-4956-8376-a8758f12bf08':
        return {
          ok: true,
          data: require('../Fixtures/Checkpoints/2.json'),
        }; break;
    }
  },
};
