import React from "react";
import {
  ScrollView,
  FlatList,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import FlightListItem from "../Components/Flights/FlightListItem";
import FlightActions from "../Redux/FlightRedux"; // FIXME - Fake flight arrival data please replace with real api
import { totalFlightsRetrieved } from "../Redux/FlightRedux";
import { connect } from "react-redux";

import styles from "./Styles/DashboardStyles";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight_num: '',
      airline_name: ''
    };
  }
  static navigationOptions = {
    title: "Search Results",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 0.33333333333333333333,
    shadowOffset: {
      height: 0.33333333333333333333
    },
    elevation: 4
  };
  componentDidMount() {
    this.props.searchFlights(this.props.navigation.state.params.flight_num, this.props.navigation.state.params.airline_name)
  }
  render() {
    const { navigate } = this.props.navigation;
    let {flight_num, airline_name, flight, flights} = this.props;

    return (
      <View>
        {flight.fetching == false &&
        <ScrollView style={styles.container}>
          <FlatList
            data={flights === null ? [] : flights}
            renderItem={({ item }) =>
              <FlightListItem
                key={item.base_flight}
                city={item.visited_cities_full}
                flight={item.base_flight}
                gate={String(item.gate)}
                time={item.sched_time}
                flight_type={item.flight_type}
                airline={item.base_airline_name}
                onPress={() =>
                  navigate("Profile", {
                    time: item.sched_time,
                    gate: item.gate,
                    flight_type: item.flight_type,
                    airline: item.base_airline_name,
                    terminal: item.terminal_id,
                    from: item.visited_cities,
                    baggage_claim: item.baggage_claim,
                    flight: item.base_flight
                  })}
              />}
          />
        </ScrollView>
        }
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    flights: state.flight.search_data,
    flight: state.flight
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchFlights: (flight_number, airline) =>
      dispatch(FlightActions.flightSearchRequest(flight_number, airline)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
