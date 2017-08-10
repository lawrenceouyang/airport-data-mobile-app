/**
 * Created by alex.vincent on 7/27/2017.
 */
import React, { PropTypes } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import styles from '../../Styles/DetailFlightInfo';
import GarageDetails from '../../../Components/Garages/GarageDetails';
import LevelDetails from '../../../Components/Garages/LevelDetails';
import Colors from '../../../Themes/Colors'
import { Copyright } from '../../../Components/Misc/Copyright';
import FlightDetail from '../../../Components/Flights/FlightDetail';
import ArrivalDeparture from '../../../Components/Flights/ArrivalDepartureDetail';

import { Images } from '../../../Themes';

// Styles

export default class GarageProfile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.garage_name,
    headerStyle: {
      backgroundColor: Colors.headerBackgroundColor,
    },
  });

  render() {
    const { item } = this.props.navigation.state.params;

    return (
      <View style={{flex: 1}}>

        {/*Main Content*/}
        <ScrollView style={styles.container}>


          <View style={{paddingLeft: 2, paddingRight: 2}}>
            <Text style={styles.panelTitle}>Garage Details</Text>
            <GarageDetails item={item}/>
          </View>

          {item.levels != null &&
            <View style={{paddingLeft: 2, paddingRight: 2}}>
                <Text style={styles.panelTitle}>Levels/Floors</Text>
                {item.levels.map(level =>
                  <LevelDetails key={level.level} item={level}/>
                )}
            </View>
          }




        </ScrollView>
      </View>
    );
  }
}
