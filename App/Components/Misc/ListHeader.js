/**
 * Created by alex.vincent on 8/7/2017.
 */

import React, { PropTypes } from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  Picker,
  TextInput,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import styles from '../Styles/ListItemStyles';
import ExamplesRegistry from '../../Services/ExamplesRegistry';
import ModalPicker from 'react-native-modal-picker';
import FilterButton from '../Misc/Buttons/FilterButton';
import FlightActions from '../../Redux/FlightRedux'; // FIXME - Fake flight arrival data please replace with real api
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';

// Note that this file needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.
ExamplesRegistry.addComponentExample('Flights List Header', () =>
  <FlightListHeader result_count={2} sort_options={['City', 'Time', 'Gate']} />,
);

class FlightListHeader extends React.Component {
  static propTypes = {
    // sortOptions: PropTypes.array,
    // handleSort: PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      pickerValue: '',
    };
  }

  componentWillMount () {
    // this.props.handleSort(this.props.sortOptions[0].key);
  }

  _loadPicker() {

    if (Platform.OS === 'android') {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ flex: 5, fontSize: 12, paddingLeft: 10, marginTop: 10, marginBottom: 10 }}>
            Search Results ({this.props.resultCount})
          </Text>

        </View>
      );
    } else if (Platform.OS === 'ios') {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 5, fontSize: 12, paddingLeft: 10, marginTop: 10, marginBottom: 10 }}>
            Search Results ({this.props.resultCount})
          </Text>

        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this._loadPicker()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    flight: state.flight,
  };
};

export default connect(mapStateToProps)(FlightListHeader);
