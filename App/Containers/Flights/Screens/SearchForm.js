import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import FlightResults from '../FlightResults';
import { Copyright } from '../../../Components/Misc/Copyright';
import SearchBar from '../../../Components/Misc/SearchBar';
import styles from '../../Styles/DashboardStyles';
import searchStyles from '../../../Components/Styles/SearchBarStyles';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight_num: '',
      airline_name: '',
      garage_name: '',
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Find a ' + params.type,
      headerRight: (
        <TouchableOpacity onPress={() => params.onSearch()}>
          <Text style={searchStyles.searchButton}>Search</Text>
        </TouchableOpacity>
      ),
    };
  };

  flightNumChanged = num => {
    this.setState({ flight_num: num });
  };
  airlineNameChanged = name => {
    this.setState({ airline_name: name });
  };
  garageNameChanged = name => {
    this.setState({ garage_name: name });
  };
  componentDidMount() {
    this.props.navigation.setParams({ onSearch: this.onSearch });
  }
  render() {
    return (
      <View style={{marginLeft: 20, marginRight: 20}}>
        <ScrollView >
          {this.props.navigation.state.params.type === 'Flight' &&
            <View>
              <SearchBar
                label="Flight #"
                onSearch={this.onSearch}
                onChange={this.flightNumChanged}
                searchType="Flight #"
              />
              <SearchBar
                label="Airline"
                onSearch={this.onSearch}
                onChange={this.airlineNameChanged}
                searchType="Airline Name"
              />
            </View>}
          {this.props.navigation.state.params.type === 'Garage' &&
            <View>
              <SearchBar
                label="Garage Name *"
                onSearch={this.onSearch}
                onChange={this.garageNameChanged}
                searchType="Garage Name"
              />
            </View>}
          <Text style={{paddingTop: 10, fontSize: 12}}>* Required fields</Text>
          {/*<Copyright />*/}
        </ScrollView>
      </View>
    );
  }
  onSearch = () => {
    var results = this.props.navigation.state.params.type + 'SearchResults';
    this.props.navigation.navigate(results, {
      data: this.state,
    });
  };
}
