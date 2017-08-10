/**
 * Created by alex.vincent on 6/30/2017.
 */
import React from 'react'
import { ScrollView, Text, Image, View, Button, FlatList} from 'react-native'
import FlightListItem  from '../Components/Flights/FlightListItem'
import FlightActions from "../Redux/FlightRedux"
import FavoriteActions, {isFavoriteFlight} from "../Redux/FavoriteRedux"
import {totalFlightsRetrieved, sortFlights} from "../Redux/FlightRedux"
import {getCurrentRouteName} from "../Redux/NavigationRedux"
import { connect } from 'react-redux'
import R from 'ramda'
import Icon from 'react-native-vector-icons/FontAwesome'

// Styles
import styles from './Styles/DashboardStyles'

class FlightsFavorites extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'My Flights',
    tintColor: '#fffff',
    tabBarIcon: ({ tintColor }) => <Icon name="star" size={30} color={tintColor} />,
    elevation: 1
  };

  componentDidUpdate(prevProps) {
    // Checks if the previous screen was not favorites. If it wasn't, then go and retrieve all flights.
    if (getCurrentRouteName(this.props.nav) === 'Favorites' && getCurrentRouteName(prevProps.nav) !== 'Favorites') {
      setTimeout(() => this.props.updateFavoriteFlights(this.props.favorite.favorite_flight_numbers));
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    const EmptyComponent =
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
        <Image style={{width: 125, height: 125}} source={require("../Images/airplane-takeoff.png")} />
        <Text style={{fontSize: 20, marginTop: 20}}> Ready for take-off! </Text>

        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
          <Text style={{fontSize: 14}} > Your </Text>
          <Icon name="star" color='#ffdf00' size={18}/>
          <Text style={{fontSize: 14}}> flights will show up here. </Text>
        </View>

        <Button onPress={() => this.props.navigation.navigate('SearchPager')} title="Find a Flight" color="#033C56" />
      </View>;


    let {favorite}= this.props;
    // let favoriteFlights = [];

    // for (let i = 0; i < R.length(flights); i++) {
    //   if (isFavoriteFlight(favorite, flights[i].base_flight))
    //     favoriteFlights = R.append(flights[i], favoriteFlights)
    // }
    return (
      <View>
            <ScrollView style={styles.container}>
            {/* List View loading a list of FlightListItems */}
            <FlatList
              data={favorite.favorite_flights}
              ListEmptyComponent={EmptyComponent}
              renderItem={({item}) => {
                const isFavorite = isFavoriteFlight(favorite, item.base_flight);
                  return (
                    <View>{isFavorite && <FlightListItem
                      airline={item.base_airline_name}
                      key={item.base_flight}
                      item={item}
                      starred={isFavorite}
                      onPress={() => navigate('Profile', {
                        item: item,
                        airline: item.base_airline_name,
                        time: item.sched_time,
                        gate: item.gate,
                        flight_type: item.flight_type,
                        terminal: item.terminal_id,
                        from: item.visited_cities,
                        baggage_claim: item.baggage_claim,
                        flight: item.base_flight,
                      })}
                      starPress={() => {
                        (isFavorite) ? this.props.deleteFavoriteFlight(item.base_flight) : this.props.addFavoriteFlight(item)
                      }}
                    />}</View>
                  );
                }
              }
            />
            </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
    fetching: state.flight.fetching,
    flights: state.flight.data,
    flight: state.flight,
    favorite: state.favorite
  }
};

// create your own functions here as you desire
const mapDispatchToProps = (dispatch) => {
  return {
    getAllFlights: (terminal, mode) => dispatch(FlightActions.flightRequest(terminal, mode)),
    getArrivalFlightsTermial1: () => dispatch(FlightActions.flightRequest(1, "arrival")),
    addFavoriteFlight: (flight) => dispatch(FavoriteActions.flightSaveRequest(flight)),
    deleteFavoriteFlight: (flight_number) => dispatch(FavoriteActions.flightDeleteRequest(flight_number)),
    updateFavoriteFlights: (favorite_flight_numbers) => dispatch(FavoriteActions.flightUpdateSavedFlights(favorite_flight_numbers))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsFavorites)
