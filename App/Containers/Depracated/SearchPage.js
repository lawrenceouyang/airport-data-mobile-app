import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";
import SearchBar from "../Components/SearchBar";
import styles from "./Styles/DashboardStyles";
import searchStyles from "../Components/Styles/SearchBarStyles";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.flightNumChanged = this.flightNumChanged.bind(this);
    this.airlineNameChanged = this.airlineNameChanged.bind(this);
    this.state = {
      flight_num: "",
      airline_name: ""
    };
  }
  static navigationOptions = {
    title: "Find a Flight",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 0.33333333333333333333,
    shadowOffset: {
      height: 0.33333333333333333333
    },
    elevation: 4,
    headerRight: (
      <TouchableOpacity onPress={() => _this.onSearch()}>
        <Text style={searchStyles.searchButton}>Search</Text>
      </TouchableOpacity>
    )
  };

  flightNumChanged(num) {
    this.setState({flight_num: num})
  }
  airlineNameChanged(name) {
    this.setState({airline_name: name})
  }
  render() {
    const { navigate } = this.props.navigation;
    _this = this;

    return (
      <ScrollView style={styles.section}>
        <SearchBar label='Flight #' onSearch={this.onSearch} onChange={this.flightNumChanged} searchType="Flight #"/>
        <SearchBar label='Airline' onSearch={this.onSearch} onChange={this.airlineNameChanged} searchType="Airline"/>
      </ScrollView>
    );
  }
  onSearch() {
    this.props.navigation.navigate("Results", {
      flight_num: this.state.flight_num,
      airline_name: this.state.airline_name
    });
  }
}
