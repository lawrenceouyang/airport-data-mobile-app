/**
 * Created by kvillalobos on 7/21/2017.
 */

import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import ExamplesRegistry from '../../Services/ExamplesRegistry';
import styles from '../Styles/CardStyles';
import PercentageCircle from 'react-native-percentage-circle';
import ProgressCircle from 'react-native-progress-circle';
import Color from '../../Themes/Colors'
import moment from 'moment';

// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */

ExamplesRegistry.addComponentExample('Garage Card ', () =>
  <GarageCard number="100" subtitle="Garage A" time="Updated - 12:21 PM" />,
);

export default class GarageCard extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func,
    getGarage: PropTypes.func,
    children: PropTypes.string,
    navigator: PropTypes.object,
    subtitle: PropTypes.string,
    number: PropTypes.string,
    time: PropTypes.string,
  };

  getStatusStyle(status) {
    switch (status) {
      case 'FREE':
        return styles.subtitleBottomTextPositive;
        break;
      case 'BLOCKED':
        return styles.subtitleBottomTextNegative;
        break;
      case 'OCCUPIED':
        return styles.subtitleBottomTextNegative;
    }
  }

  getStatusAlias(status) {
    switch (status) {
      case 'FREE':
        return 'OPEN';
        break;
      case 'BLOCKED':
        return 'BLOCKED';
        break;
      case 'OCCUPIED':
        return 'FULL';
    }
  }

  componentDidMount(){
    if (this.props.item.free_spaces == null) {
      this.props.getGarage(this.props.item.garage_uuid);
    }
  }

  render(){

    let { item, onPress } = this.props;

    const garageFullCardStyle = [
      styles.container,
      styles.card,
    ];

    const garageListCardStyle = {
      marginBottom: 1,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: Color.snow,
      alignItems: 'center',
    };

    return (
        <View>
          {!item.fetching &&
          <TouchableOpacity style={garageListCardStyle} onPress={onPress}>

            <View style={{ flexDirection: 'row', paddingTop: 3 }}>

              {/*Information Column*/}
              <View style={{ flexDirection: 'column', flex: 5, paddingLeft: 15 }}>

                {/*Garage Name*/}
                <Text style={styles.subtitleText}>
                  {item.garage_name != null ? item.garage_name : ''}
                </Text>

                {/*Spots Available*/}
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.numberText}>
                    {item.free_spaces}
                  </Text>
                  <Text style={styles.middleText}>spots available</Text>
                </View>


                {/*Status*/}
                <Text style={this.getStatusStyle(String(item.status).toUpperCase())}>
                  {item.status != null ? this.getStatusAlias(String(item.status).toUpperCase()) : 'Unavailable'}
                </Text>

              </View>

              {/*Percentage Column*/}
              <View style={{ flexDirection: 'column', flex: 2, alignSelf: 'center' }}>
                <ProgressCircle radius={42}
                                percent={item.percent_occupied != null ? item.percent_occupied : 0}
                                borderWidth={7}
                                bgColor={Color.snow}
                                shadowColor={'#E9E9EF'}
                                color={Color.percentageCircleColor}
                >
                  <Text style={{ flexDirection: 'column', alignSelf: 'center', fontSize: 12 }}>
                    {item.occupied_spaces} / {item.total_spaces}
                  </Text>
                </ProgressCircle>
              </View>

            </View>

          </TouchableOpacity>
        }

      </View>


    );
  }
}
