// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// our "constructor"
const create = (baseURL = '#REDACTED#') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      apikey: '#REDACTED#',
    },
    // 10 second timeout...
    timeout: 10000,
  });

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const getRoot = () => api.get('');
  const getRate = () => api.get('rate_limit');
  const getUser = username => api.get('search/users', { q: username });
  const searchFlights = () => api.get('/flight-services/v1.0/flight');
  const getFlights = (terminal, mode) => {
    // If  mode and terminals are both missing provide all flights
    if ((mode === null || mode === undefined) && (terminal === null || terminal === undefined)) {
      return api.get('/flight-services/v1.0/flight');
    } else if (!(mode === 'arrivals' || mode === 'departures') || (terminal < 1 || terminal > 4)) {
      // If mode is incorrect or terminal numbers are not 1-4 return error
      return {
        ok: false,
        error: "Incorrect mode/terminal supplied. Please supply arrivals or departures as flight modes."
      }
    }
    else{
      const path = (mode === "arrivals") ?
        '/flight-services/v1.0/terminal/'+terminal+'/flight/arrival' :
        '/flight-services/v1.0/terminal/'+terminal+'/flight/departure';
      return api.get(path);
    }
    const path =
      mode === 'arrivals'
        ? `/flight-services/v1.0/terminal/${terminal}/flight/arrival`
        : `/flight-services/v1.0/terminal/${terminal}/flight/departure`;
    return api.get(path);
  };
  const getGarages = () => api.get('/sfo/v1.0/garages');
  const getGarageOccupancy = garageUuid => {
    if (garageUuid === null || garageUuid === undefined)
      return {
        ok: false,
        error: `No garage uuid supplied. 
                Please supply a garage uuid to obtain the occupancy.`,
      };
    return api.get(`/sfo/v1.0/garages/${garageUuid}/occupancy`);
  };

  const getCheckpoints = () => api.get('/sfo/v1.0/checkpoints');
  const getCheckpointWaitTime = (checkpointUuid) => {
    if (checkpointUuid === null || checkpointUuid === undefined)
      return {
        ok: false,
        error: `No checkpoint uuid supplied. 
                Please supply a checkpoint uuid to obtain the wait time.`,
      };
    return api.get(`/sfo/v1.0/checkpoints/${checkpointUuid}/waittime`);
  };

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getRate,
    getUser,
    getFlights,
    searchFlights,
    getGarages,
    getGarageOccupancy,
    getCheckpoints,
    getCheckpointWaitTime,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
