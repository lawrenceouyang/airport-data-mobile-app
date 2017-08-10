/**
 * Created by alex.vincent on 6/30/2017.
 */
import React from 'react';
import { ScrollView, View, Text, Button, RefreshControl } from 'react-native';
import FavoriteActions from '../../../Redux/FavoriteRedux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import SearchButton from '../../../Components/Misc/SearchButtonIcon';
import FlightResults from '../FlightResults';
import { Copyright } from '../../../Components/Misc/Copyright';
import styles from '../../Styles/DashboardStyles';

class AllFlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'My Flights',
      tabBarIcon: ({ tintColor }) => <Icon name="star" size={30} color={tintColor} />,
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

  componentDidMount() {
    this.props.navigation.setParams({ startSearch: this.startSearch });
  }
  onRefresh = () => {
    const { favoriteRedux } = this.props;
    if (favoriteRedux.favorite_flights.length > 0) {
      this.setState({ refreshing: true });
      this.props.updateFavorites(favoriteRedux.favorite_flight_numbers);
      if (favoriteRedux.fetching) {
        this.setState({ refreshing: false });
      }
    }
  };
  render() {
    let {
      flightRedux,
      favoriteRedux,
      navigation,
      addFavoriteFlight,
      deleteFavoriteFlight,
      updateFavorites,
    } = this.props;
    return (
      <View>
        {/*Main Content*/}
        <FlightResults
          redux={favoriteRedux}
          favoriteRedux={favoriteRedux}
          navigationRedux={navigation}
          addFavoriteFlight={addFavoriteFlight}
          deleteFavoriteFlight={deleteFavoriteFlight}
          dataType={'favorite_flights'}
          refresh={() => updateFavorites(favoriteRedux.favorite_flight_numbers)}
        />
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
    addFavoriteFlight: flight => dispatch(FavoriteActions.flightSaveRequest(flight)),
    deleteFavoriteFlight: flight_number =>
      dispatch(FavoriteActions.flightDeleteRequest(flight_number)),
    updateFavorites: flight_numbers =>
      dispatch(FavoriteActions.flightUpdateSavedFlights(flight_numbers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllFlights);
