/**
 * Created by alex.vincent on 7/12/2017.
 */
import React, { PropTypes } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import Colors  from '../../Themes/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/ListItemStyles';
import FilterButton from '../Misc/Buttons/FilterButton';

// Note that this file needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// ExamplesRegistry.addComponentExample('Flights List Item', () =>
//   <DashboardButton
//     text='Example Button'
//     onPress={() => window.alert('Pressed a Dashboard Button!')}
//   />
// )

export default class FlightFilterBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terminal: 1,
      mode: 'departures',
    };
  }

  static propTypes = {
    onPress: PropTypes.func,
    filterItems: PropTypes.func,
  };

  filterByTerminal(terminal) {
    this.setState({ terminal });
    this.props.filterItems(terminal, this.state.mode);
  }

  filterByMode(mode) {
    this.setState({ mode });
    this.props.filterItems(this.state.terminal, mode);
  }

  render() {
    let { terminal, mode } = this.state;

    return (
      <View>
        {/*Terminal Filter Row*/}
        <View style={{ backgroundColor: Colors.filterBannerColor, height: 90 }}>
          <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 10 }}>
            <Icon
              style={{ flex: 0, alignSelf: 'center', paddingRight: 15 }}
              name="building-o"
              size={25}
              color="white"
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ flexDirection: 'row', alignSelf: 'center', paddingRight: 10 }}
            >
              <FilterButton
                selected={terminal === 1}
                text="Terminal 1"
                onPress={() => this.filterByTerminal(1)}
              />
              <FilterButton
                selected={terminal === 2}
                text="Terminal 2"
                onPress={() => this.filterByTerminal(2)}
              />
              <FilterButton
                selected={terminal === 3}
                text="Terminal 3"
                onPress={() => this.filterByTerminal(3)}
              />
              <FilterButton
                selected={terminal === 4}
                text="Int'l Terminal"
                onPress={() => this.filterByTerminal(4)}
              />
            </ScrollView>
          </View>

          {/*Arrival Filter Row*/}
          <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 10 }}>
            <Icon
              style={{ flex: 0, alignSelf: 'center', paddingRight: 15 }}
              name="plane"
              size={25}
              color="white"
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ flexDirection: 'row', alignSelf: 'center', paddingRight: 10 }}
            >
              <FilterButton
                selected={mode === 'departures'}
                text="Departures"
                onPress={() => this.filterByMode('departures')}
              />
              <FilterButton
                selected={mode === 'arrivals'}
                text="Arrivals"
                onPress={() => this.filterByMode('arrivals')}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
