import React from 'react';
import { ScrollView, Text, View, ActivityIndicator } from 'react-native';
import FlightActions from '../../../Redux/FlightRedux';
import FavoriteActions from '../../../Redux/FavoriteRedux';
import FlightFilterBanner from '../../../Components/Flights/FlightFilterBanner';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchButton from '../../../Components/Misc/SearchButtonIcon';
import FlightResults from '../FlightResults';
import { Copyright } from '../../../Components/Misc/Copyright';
import styles from '../../Styles/DashboardStyles';

class SearchedFlights extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Search Results',
    shadowOpacity: 0.1,
    shadowRadius: 0.33333333333333333333,
    shadowOffset: {
      height: 0.33333333333333333333,
    },
    elevation: 4,
  };

  // Loads Terminal 1 / Departures flights by default
  componentWillMount() {
    this.props.searchFlights(
      this.props.navigation.state.params.data.flight_num,
      this.props.navigation.state.params.data.airline_name,
    );
  }

  render() {
    let {
      flightRedux,
      favoriteRedux,
      navigation,
      addFavoriteFlight,
      deleteFavoriteFlight,
    } = this.props;
    return (
      <View>
        {/*Main Content*/}
        {flightRedux.fetching &&
          <View style={{ paddingTop: 150 }}>
            <ActivityIndicator animating={flightRedux.fetching} size={'large'} />
            <Text style={{ paddingTop: 10, alignSelf: 'center' }}> Searching for Flights </Text>
          </View>}

        {!flightRedux.fetching &&
          <FlightResults
            redux={flightRedux}
            favoriteRedux={favoriteRedux}
            navigationRedux={navigation}
            addFavoriteFlight={addFavoriteFlight}
            deleteFavoriteFlight={deleteFavoriteFlight}
            dataType="search_data"
            refresh={() =>
              this.props.searchFlights(
                this.props.navigation.state.params.data.flight_num,
                this.props.navigation.state.params.data.airline_name,
              )}
            banner={false}
          />}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    flightRedux: state.flight,
    favoriteRedux: state.favorite,
  };
};

// create your own functions here as you desire
const mapDispatchToProps = dispatch => {
  return {
    searchFlights: (flight_number, airline) =>
      dispatch(FlightActions.flightSearchRequest(flight_number, airline)),
    addFavoriteFlight: flight_number => dispatch(FavoriteActions.flightSaveRequest(flight_number)),
    deleteFavoriteFlight: flight_number =>
      dispatch(FavoriteActions.flightDeleteRequest(flight_number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchedFlights);
