/**
 * Created by kvillalobos on 7/21/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View, FlatList } from 'react-native';
import styles from '../../../Components/Styles/CardStyles';
import GarageCard from '../../../Components/Garages/GarageCard';
import GarageResults from '../../Garages/GarageResults';
import FilterBanner from '../../../Components/Misc/FilterBanner';
import Colors from '../../../Themes/Colors';
import GarageActions from '../../../Redux/GarageRedux';
import SearchButton from '../../../Components/Misc/SearchButtonIcon';
import { connect } from 'react-redux';
import ListHeader from '../../../Components/Misc/ListHeader'

import { Images } from '../../../Themes';

import { filterTransform } from '../../../Transforms/SubsetTransforms';

// Styles

class AllGarages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      garageList: [],
      key: 'garage_type',
      criteria: 'all',
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Garages',
      headerStyle: {
        backgroundColor: Colors.headerBackgroundColor,
      },
      headerRight: <SearchButton onPress={() => params.startSearch()} />,
    };
  };
  startSearch = () => {
    this.props.navigation.navigate('SearchMain', {
      type: 'Garage',
    });
  };
  componentWillMount() {
    this.props.navigation.setParams({ startSearch: this.startSearch });
  }
  componentDidMount() {
    let { getAllGarages } = this.props;
    getAllGarages();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.garageRedux.data !== this.state.garageList) {
      if (this.state.criteria === 'all') {
        this.setState({garageList: nextProps.garageRedux.data});
      } else {
        this.setState({ garageList: filterTransform(nextProps.garageRedux.data, this.state.key, this.state.criteria) });
      }
    }
  }

  /* Clear the Garage Redux when the user closes the Garage Module */
  componentWillUnmount(){
    this.props.clearGarages();
  }

  loadGarages = (filterKey = 'garage_type', filterCriteria = 'all') => {

    const { garageRedux } = this.props;

    if (filterCriteria === 'all') {
      this.setState({
        garageList: garageRedux.data,
        key: filterKey,
        criteria: 'all',
      });
    } else {
      this.setState({
        garageList: filterTransform(garageRedux.data, filterKey, filterCriteria),
        key: filterKey,
        criteria: filterCriteria,
      });
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    let { garageRedux, getAllGarages, getGarage, navigation } = this.props;

    const garageFilterItems = [
      {
        icon: 'building-o',
        filters: [
          {
            filterKey: 'garage_type',
            filterCriteria: 'all',
            filterAlias: 'All',
          },
          {
            filterKey: 'garage_type',
            filterCriteria: 'public',
            filterAlias: 'Public',
          },
          {
            filterKey: 'garage_type',
            filterCriteria: 'employee',
            filterAlias: 'Employee',
          },
        ],
      },
    ];
    return (
      <View style={{flex: 1}}>
        {/*Main Content*/}
        <ScrollView>
          {/*Garage List Banner*/}
          <FilterBanner handleFilter={this.loadGarages} filters={garageFilterItems} />

          <GarageResults
            garageRedux={garageRedux}
            getAllGarages={getAllGarages}
            garageList={this.state.garageList}
            getGarage={getGarage}
            loadGarages={() => this.loadGarages(this.state.key, this.state.criteria)}
            navigation={navigation}
            navigationRedux={this.props.navigationRedux}
          />

          {/*/!*Garage Result List*!/*/}
          {/*<FlatList*/}
          {/*data={garageRedux === null ? [] : garageRedux.data}*/}
          {/*refreshing={garageRedux.fetching}*/}
          {/*extraData={garageRedux.data}*/}
          {/*renderItem={({ item }) => {*/}
          {/*return (*/}
          {/*<GarageCard onPress={() => navigate('GarageProfile', { navigation: navigate, item: item })}*/}
          {/*item={item}*/}
          {/*getGarage={getGarage}*/}
          {/*/>*/}
          {/*);*/}
          {/*}*/}
          {/*}*/}
          {/*/>*/}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    garageRedux: state.garage,
  };
};

// create your own functions here as you desire
const mapDispatchToProps = dispatch => {
  return {
    getAllGarages: () => dispatch(GarageActions.garageRequest()),
    getGarage: garageUuid => dispatch(GarageActions.garageOccupancyRequest(garageUuid)),
    clearGarages: () => dispatch(GarageActions.garageClear()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllGarages);
