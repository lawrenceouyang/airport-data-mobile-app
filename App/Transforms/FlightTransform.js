/**
 * Created by aayush.bhandari on 7/17/17.
 */
import R from 'ramda';

export default (flight_data: array) => {
  const airports = require('../Fixtures/airports.json');
  for (let flight in flight_data) {
    let visited_cities = flight_data[flight]['visited_cities'];
    // check if visited cities is not missing
    if (visited_cities !== null && visited_cities !== undefined) {
      // check if visited cities is array, if not convert it to an array
      visited_cities = Array.isArray(visited_cities) ? visited_cities : [visited_cities];
      // Mapper to map city acronym to full name
      let visited_cities_full = visited_city =>
        R.find(R.propEq('iata_code', visited_city))(airports.airports)['airport_name'];
      //Add full city name
      flight_data[flight]['visited_cities_full'] = R.map(visited_cities_full, visited_cities);
    } else {
      // if visited cities is missing save visited_cities_full to missing todo fix API
      flight_data[flight]['visited_cities_full'] = ['Unavailable'];
    }
    // check if base airline is missing
    let requiredFields =  ["base_airline_name", "base_flight"];
    for (let field in requiredFields){
      flight_data[flight][requiredFields[field]]=  flight_data[flight][requiredFields[field]]!=null ? flight_data[flight][requiredFields[field]] : "Unavailable";
    }
    // check if base flight is missing
    //Add airline logo by getting first 2 characters frm base flight
    let airline_code = flight_data[flight]['base_flight'].substr(0, 2);
    flight_data[flight]['logo'] =
      'https://api-stage.flysfo.com/sfo/v1.0/airlines/' + airline_code + '/logo?apikey=qgAKCx4k8UwoSLkN8N3gitYXbm0NgNM7';
  }
  return flight_data;
};
