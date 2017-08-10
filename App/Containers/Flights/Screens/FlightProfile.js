/**
 * Created by Daniel Martin on 7/10/2017.
 */
import React, { PropTypes } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import styles from '../../Styles/DetailFlightInfo';
import FlightDetail from '../../../Components/Flights/FlightDetail';
import ArrivalDeparture from '../../../Components/Flights/ArrivalDepartureDetail';

import { Images } from '../../../Themes';

// Styles

export default class FlightProfile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Flight #' + navigation.state.params.item.base_flight,
    headerStyle: {
      backgroundColor: '#184A62'
    },
  });

  render() {
    const { item } = this.props.navigation.state.params;

    return (
      <View style={{flex: 1}}>
        {/*Main Content*/}
        <ScrollView style={styles.container}>
          <FlightDetail item={item} from={item.from} />

          <ArrivalDeparture
            item={item}
            flight_type={item.flight_type}
            time={item.sched_time}
            gate={item.gate}
            baggage_claim={item.baggage_claim}
            terminal={item.terminal}
          />

        </ScrollView>
      </View>
    );
  }
}
