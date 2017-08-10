/**
 * Created by alex.vincent on 7/10/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import styles from '../Styles/DetailFlightInfo';

import { Images } from '../../Themes';

// Styles

export default class FlightProfile extends React.Component {
  static navigationOptions = {
    title: 'Flight Profile',
    headerStyle: {
      backgroundColor: '#033C56',
    },
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/*Main Content*/}
        <ScrollView style={styles.container}>
          {/*Flight Details*/}
          <View>
            <Text style={styles.panelTitle}>Flight Status</Text>
          </View>
          {/* Main Box */}
          <View style={styles.mainPanel}>
            {/* First Column*/}
            <View style={styles.panelItems}>
              {/* Airline */}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>Airline</Text>
                <Text>American Airlines</Text>
              </View>

              {/*From*/}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>From</Text>
                <Text>San Francisco</Text>
              </View>
            </View>
            {/*End of First Column*/}

            {/* Second Column*/}
            <View style={styles.panelItems}>
              {/* Flight $ */}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>Flight #</Text>
                <Text>AD7GS32Q</Text>
              </View>

              {/*To*/}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>To</Text>
                <Text>Las Vegas</Text>
              </View>
            </View>
            {/*End of Second Column*/}

            {/* End of Main Box*/}
          </View>

          {/*Flight Details*/}

          <View>
            <Text style={styles.panelTitle}>Arrival Details</Text>
          </View>
          {/* Main Box */}
          <View style={styles.mainPanel}>
            {/* First Column*/}
            <View style={styles.panelItems}>
              {/* Airline */}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>Arrival Time</Text>
                <Text style={styles.arrivalTime}>10:00am</Text>
              </View>

              {/*From*/}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>Gate</Text>
                <Text>45</Text>
              </View>
            </View>
            {/*End of First Column*/}

            {/* Second Column*/}
            <View style={styles.panelItems}>
              {/* Flight $ */}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>Arriving Terminal</Text>
                <Text>Terminal 1</Text>
              </View>

              {/*To*/}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>Baggage Claim</Text>
                <Text>7</Text>
              </View>
            </View>
            {/*End of Second Column*/}

            {/* End of Main Box*/}
          </View>

          <View style={styles.directionPanel}>
            <Text style={styles.directionPanelSubtitle}>Get Directions</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
