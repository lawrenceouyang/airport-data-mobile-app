/**
 * Created by alex.vincent on 6/30/2017.
 */
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

class AllFlights extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'All Flights',
      tabBarIcon: ({ tintColor }) => <Icon name="plane" size={30} color={tintColor} />,
      shadowOpacity: 0.1,
      shadowRadius: 0.33333333333333333333,
      shadowOffset: {
        height: 0.33333333333333333333,
      },
      elevation: 4,
      headerRight: <SearchButton onPress={() => params.startSearch()} />,
    };
  };

  startSearch = () => {
    this.props.navigation.navigate('SearchMain', {
      type: 'Flight',
    });
  };

  // Loads Terminal 1 / Departures flights by default
  componentWillMount() {
    this.props.getAllFlights(1, 'departures');
    this.props.navigation.setParams({ startSearch: this.startSearch });
  }

  render() {
    let {
      flightRedux,
      favoriteRedux,
      navigation,
      addFavoriteFlight,
      deleteFavoriteFlight,
      getAllFlights,
    } = this.props;

    return (
      <View>
        {/*Main Content*/}
        {/*Flight Filter*/}
        {flightRedux.data === null &&
          <View style={{ paddingTop: 150 }}>
            <ActivityIndicator animating={flightRedux.fetching} size={'large'} />
            <Text style={{ paddingTop: 10, alignSelf: 'center' }}> Retrieving Flights </Text>
          </View>}
        {flightRedux.data !== null &&
          <FlightResults
            style={styles.container}
            redux={flightRedux}
            favoriteRedux={favoriteRedux}
            navigationRedux={navigation}
            addFavoriteFlight={addFavoriteFlight}
            deleteFavoriteFlight={deleteFavoriteFlight}
            dataType={'data'}
            refresh={() => getAllFlights(flightRedux.terminal, flightRedux.mode)}
            banner={true}
            filterItems={getAllFlights}
          />}
        {/* <Copyright /> */}
        {/* </ScrollView> */}
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
    getAllFlights: (terminal, mode) => dispatch(FlightActions.flightRequest(terminal, mode)),
    addFavoriteFlight: flight => dispatch(FavoriteActions.flightSaveRequest(flight)),
    deleteFavoriteFlight: flight_number =>
      dispatch(FavoriteActions.flightDeleteRequest(flight_number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllFlights);
