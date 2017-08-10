/**
 * Created by aayush.bhandari on 7/20/17.
 */
import React from 'react';
import { FlatList, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import FlightListItem from '../../Components/Flights/FlightListItem';
import FlightListHeader from '../../Components/Flights/FlightListHeader';
import { isFavoriteFlight } from '../../Redux/FavoriteRedux';
import R from 'ramda';
import { Copyright } from '../../Components/Misc/Copyright';
import ErrorPage from '../../Components/Misc/ErrorPage';
import EmptyPages from '../../Components/Misc/EmptyPages';
import FlightFilterBanner from '../../Components/Flights/FlightFilterBanner';

export default class FlightResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Gate', //was visited_cities_full
      flightCount: 10,
      flightIncrement: 10,
    };
  }

  // Reset flight every-time the component receives a new prop
  componentWillReceiveProps(nextProps) {
    let { flightCount } = this.state;

    if (R.equals(this.props.favoriteRedux, nextProps.favoriteRedux)) {
      this.resetAllFlights();
    } else if (
      !R.equals(this.props.favoriteRedux, nextProps.favoriteRedux) &&
      this.props.dataType === 'favorite_flights'
    ) {
      this.resetAllFlights();
    }
  }

  // Sort Flights By Field
  sortFlights = (data, field) => {
    let sortByCustomField = R.sortBy(R.compose(R.prop(field)));
    if (data !== null) {
      return sortByCustomField(data);
    }
  };

  // Loads a sorted sublist of flights based on the page's flight count
  loadFlights = flight => {
    let { flightCount } = this.state;
    let flightData = this.sortFlights(flight[this.props.dataType], this.state.sortBy);
    return R.slice(0, flightCount, flightData);
  };

  // Increases the sublist's length by changing the page's flight count
  loadMoreFlights = () => {
    let { flightCount, flightIncrement } = this.state;
    let { redux, dataType } = this.props;
    let totalFlights = redux[dataType].length;
    flightCount = R.min(totalFlights, flightCount + flightIncrement);
    this.setState({
      flightCount,
    });
    // return flightCount;
  };

  _keyExtractor = (item, index) => item.base_flight;

  // Resets the pagination
  resetAllFlights = () => {
    if (this.props.redux[this.props.dataType] !== null) {
      this.setState({
        flightCount: 10,
      });
    }
  };

  // Resorts the flights
  resortFlights = value => {
    this.setState({ sortBy: value });
  };

  renderHeader = () => {
    const flightSortOptions = [
      { key: 'base_flight', label: 'Flight #' },
      { key: 'gate', label: 'Gate' },
      { key: 'sched_time', label: 'Time' },
    ];
    let { redux, dataType, banner } = this.props;
    if (redux[dataType] !== null && redux[dataType].length > 0) {
      return (
        <View>
          {banner && <FlightFilterBanner filterItems={this.props.filterItems} />}
          <FlightListHeader
            resultCount={
              redux[dataType] === null
                ? 'Loading...'
                : R.min(this.state.flightCount, redux[dataType].length)
            }
            sortOptions={flightSortOptions}
            handleSort={this.resortFlights}
          />
        </View>
      );
    }
    return <View />;
  };
  renderEmpty = () => {
    if (!this.props.redux.fetching)
      return <EmptyPages dataType={this.props.dataType} navigation={this.props.navigationRedux} />;
    return null;
  };
  renderFooter = () => {
    return (
      <View>
        <Copyright />
      </View>
    );
  };
  handleRefresh = () => {
    const { redux } = this.props;

    this.props.refresh();
  };
  renderItem = ({ item }) => {
    const isFavorite = isFavoriteFlight(this.props.favoriteRedux, item.base_flight);
    return (
      <FlightListItem
        key={item.base_flight}
        keyExtractor={(item, index) => index}
        airline={item.base_airline_name}
        item={item}
        starred={isFavorite}
        onPress={() =>
          this.props.navigationRedux.navigate('Profile', {
            item: item,
          })}
        starPress={() => {
          isFavorite
            ? this.props.deleteFavoriteFlight(item.base_flight)
            : this.props.addFavoriteFlight(item);
        }}
      />
    );
  };
  render() {
    const { navigate } = this.props.navigationRedux;
    let { redux, favoriteRedux, deleteFavoriteFlight, addFavoriteFlight, dataType } = this.props;
    let { flightCount, showLoadMore } = this.state;

    return (
      <View>
        {/*List View loading a list of FlightListItems*/}
        <FlatList
          data={redux[dataType] === null ? null : this.loadFlights(redux)}
          ListHeaderComponent={this.renderHeader}
          ListEmptyComponent={this.renderEmpty}
          refreshing={redux.fetching}
          pagingEnabled={true}
          keyExtractor={this._keyExtractor}
          onRefresh={this.props.refresh}
          initialNumToRender={flightCount}
          onEndReached={this.loadMoreFlights}
          onEndReachedThreshold={0.3}
          renderItem={this.renderItem}
        />
        {this.state.loading && <ActivityIndicator animating={this.state.loading} size={'large'} />}
      </View>
    );
  }
}
