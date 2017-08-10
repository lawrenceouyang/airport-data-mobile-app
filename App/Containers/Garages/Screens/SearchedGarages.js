import React from 'react';
import { ScrollView, Text, View, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchButton from '../../../Components/Misc/SearchButtonIcon';
import { Copyright } from '../../../Components/Misc/Copyright';
import styles from '../../../Components/Styles/CardStyles';
import GarageActions from '../../../Redux/GarageRedux';
import GarageCard from '../../../Components/Garages/GarageCard';
import GarageResults from '../../Garages/GarageResults';
import FilterBanner from '../../../Components/Misc/FilterBanner';
import Colors from '../../../Themes/Colors';
import { Images } from '../../../Themes';
import { filterTransform } from '../../../Transforms/SubsetTransforms';

class SearchedGarages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      garageSearchList: [],
    };
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

  loadGarages = (filterKey = 'garage_name') => {
    const { garageRedux } = this.props;
    this.setState({
      garageSearchList: filterTransform(
        garageRedux.data,
        filterKey,
        this.props.navigation.state.params.data.garage_name,
      ),
    });
  };

  render() {
    const { garageRedux, getAllGarages, getGarage, navigation } = this.props;
    return (
      <View>
        <ScrollView>
          <GarageResults
            garageRedux={garageRedux}
            getAllGarages={getAllGarages}
            garageList={this.state.garageSearchList}
            getGarage={getGarage}
            loadGarages={this.loadGarages}
            navigation={navigation}
            navigationRedux={this.props.navigationRedux}
          />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchedGarages);
