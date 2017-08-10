/**
 * Created by alex.vincent on 6/30/2017.
 */
import React from 'react'
import { ScrollView, FlatList, Text, View, TouchableOpacity} from 'react-native'
import FlightListItem  from '../Components/Flights/FlightListItem'
import FlightListHeader from '../Components/Flights/FlightListHeader'
import FlightActions from "../Redux/FlightRedux"
import {totalFlightsRetrieved, sortFlights} from "../Redux/FlightRedux"
import FavoriteActions from "../Redux/FavoriteRedux"
import {isFavoriteFlight} from "../Redux/FavoriteRedux"
import {getCurrentRouteName} from "../Redux/NavigationRedux"
import FlightFilterBanner from "../Components/Flights/FlightFilterBanner"
import { connect } from 'react-redux'
import R from 'ramda'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchButton from '../Components/SearchButtonIcon'



// Styles
import styles from './Styles/DashboardStyles'

class FlightsAll extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'visited_cities_full',
      flightCount: 5,
      flightIncrement: 5,
      showLoadMore: true
    };
  }

  componentDidUpdate(prevProps) {
    if (getCurrentRouteName(this.props.nav) === 'All' && getCurrentRouteName(prevProps.nav) !== 'All') {
      setTimeout(()=>this.props.getAllFlights(1, 'departures'));
    }
  }


  startSearch(){
    this.props.navigation.navigate('SearchMain');
  }
  static navigationOptions = {
    title: 'All Flights',
    tabBarIcon: ({ tintColor }) => <Icon name="plane" size={35} color={tintColor}  />,
    shadowOpacity: 0.1,
    shadowRadius: 0.33333333333333333333,
    shadowOffset: {
      height: 0.33333333333333333333
    },
    elevation: 4,
    headerRight: (<SearchButton onPress = {() => _this.startSearch()}/>)

  };

  // Resets the pagination
  resetAllFlights = () => {
    this.setState({
      flightCount: 5,
      showLoadMore: true
    });
  };

  // Loads a sorted sublist of flights based on the page's flight count
  loadFlights = (flight) => {
    let {sortBy,flightCount}=this.state;
    let flightData = sortFlights(flight, sortBy);
    return R.slice(0,flightCount, flightData);
  };

  // Increases the sublist's length by changing the page's flight count
  loadMoreFlights = () => {
    let {flightCount,flightIncrement}=this.state;
    let totalFlights = totalFlightsRetrieved(this.props.flight);
    flightCount = R.min(totalFlights,flightCount+flightIncrement);
    this.setState({flightCount, showLoadMore: ((flightCount+flightIncrement) <= (totalFlights))});
    return flightCount;
  };

  // Resorts the flights
  resortFlights = (value) => {
    this.setState({sortBy: value});
  };

  componentWillMount(){
    let {flightCount}=this.state;
    let totalFlights = totalFlightsRetrieved(this.props.flight);
    this.setState({showLoadMore: ((flightCount) >= (totalFlights))});
    // let {flightCount,flightIncrement, sortBy}=this.state;
    // //this.setState({flightCount: Math.min(totalFlightsRetrieved(this.props.flight), this.state.flightIncrement)});
    // let tots = totalFlightsRetrieved(this.props.flight);
    // flightCount = tots<=flightCount?tots:flightCount;
    // this.setState({flightCount});
  }

  componentWillReceiveProps(){
    // let {flightCount}=this.state;
    // let totalFlights = totalFlightsRetrieved(this.props.flight);
    // this.setState({showLoadMore: ((flightCount) >= (totalFlights))});
    // let {flightCount,flightIncrement, sortBy}=this.state;
    // //this.setState({flightCount: Math.min(totalFlightsRetrieved(this.props.flight), this.state.flightIncrement)});
    // let tots = totalFlightsRetrieved(this.props.flight);
    // flightCount = tots<=flightCount?tots:flightCount;
    // this.setState({flightCount});
  }

  // Loads Terminal 1 / Departures flights by default
  componentDidMount(){
    this.props.getAllFlights(1, "departures");
  }


  render() {

    const { navigate } = this.props.navigation;

    _this = this; //Made becuase losing context in headerRight
    let {flight, flights, fetching, favorite}= this.props;


    const flightSortOptions = [
      // { key: "visited_cities_full", label: 'City' },
      { key: "gate", label: "Gate" },
      { key: "sched_time", label: 'Time' },
    ];

    return (
      <View>

        {/*Main Content*/}

        <ScrollView style={styles.container} >

          {/*Flight Filter*/}
          <FlightFilterBanner filterItems={this.props.getAllFlights} resetFlights={this.resetAllFlights}/>

        {fetching === false &&  // conditional rendering, only show the content once the fetching is complete
          <View style={{paddingBottom: 20}}>
            {/*Flight List Header*/}
            <FlightListHeader
            resultCount={flights === null ? "Loading..." : R.min(this.state.flightCount,totalFlightsRetrieved(this.props.flight))}
            sortOptions={flightSortOptions}
            initialValue={"Gate"}
            // sort_options={[["City", "visited_cities_full"], ["Time", "sched_time"], ["Gate", "gate"]]}
            handleSort={this.resortFlights}
            />

            {/* List View loading a list of FlightListItems */}
            <FlatList
              data={flights === null ? [] : this.loadFlights(flight)}
            renderItem={({item}) => {

              let isFavorite = isFavoriteFlight(favorite, item.base_flight);
              return (
                <FlightListItem
                key={item.base_flight+item.gate}
                airline={item.base_airline_name}
                item = {item}
                starred={isFavorite}
                onPress={() => navigate('Profile', {
                  item: item
                })}
                starPress={() => {
                  (isFavorite) ? this.props.deleteFavoriteFlight(item.base_flight) : this.props.addFavoriteFlight(item)
                }}
                />
              )}}

            />

          </View>
        }

          {/* Load More Button only shows if the amount of flights shown is less than total number of flights */}
          {this.state.showLoadMore &&
          <TouchableOpacity onPress={this.loadMoreFlights}>
            <Text style={{alignSelf: "center", color: "#033C56", fontSize: 16, paddingTop: 10, paddingBottom: 20}}>
              Load More </Text>
          </TouchableOpacity>
          }

          <View style={{alignSelf: "center", paddingBottom: 20}}>
            <Text style={{fontSize: 12, alignSelf: "center"}}>
              © 2017 San Francisco International Airport.
            </Text>
            <Text style={{fontSize: 12, alignSelf: "center"}}>
              All Rights Reserved.
            </Text>
          </View>
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
    deleteFavoriteFlight: (flight_number) => dispatch(FavoriteActions.flightDeleteRequest(flight_number))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsAll)
