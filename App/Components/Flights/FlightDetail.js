/**
 * Created by Daniel Martin 07/12/2017.
 */
import React, { PropTypes } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import styles from '../Styles/FlightDetailStyles';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/';

import { Images } from '../../Themes';

// Styles

export default class FlightDetail extends React.Component {
  static navigationOptions = {
    title: 'Flight Profile',
    headerStyle: {
      backgroundColor: '#184A62'
    },
  };

  render() {
    const { item } = this.props;
      let { logo, base_flight, flight_type, visited_cities_full, flight_number } = this.props.item;
      let { listItemImage, mainContainer, container, panelItems, panelSubtitle, mainPanel, panelTitle, panelInfo }  = styles;

    //Determines for departing flights, "From" is hard coded SFO
    //Determines for arriving flights, "To" is hard coded SFO

    let from;
    let to;

    if (flight_type === 'D') {
      from = 'SFO';
      to = visited_cities_full;
    } else if (flight_type === 'A') {
      from = visited_cities_full;
      to = 'SFO';
    }
    return (
      <View>
        {/*Main Content*/}
        <View style={styles.container}>
          {/*Flight Details*/}

          <Text style={styles.panelTitle} >Flight Details</Text>

          {/* Main Box */}
          <View style={mainPanel}>
            {/* First Column*/}
            <View style={panelItems}>
              {/* Airline */}
              <View style={{ flexDirection: 'column' }}>
                <Text style={panelSubtitle}>Airline</Text>
                <View>
                  <Image resizeMode={'contain'} style={listItemImage} source={{ uri: logo }} />
                </View>
              </View>

              {/*From*/}
              <View>
                <Text style={panelSubtitle}>From</Text>
                {from === 'SFO'
                  ? <Text>
                      {from}
                    </Text>
                  : item.visited_cities_full.map(city =>
                      <Text key={city}>

                        {city}
                      </Text>,
                    )}
                {/*<Text style={styles.panelInfo}>{from}</Text>*/}
              </View>
            </View>


            {/* Second Column*/}
            <View style={panelItems}>
              {/* Flight $ */}
              <View style={{ flexDirection: 'column' }}>
                <Text style={panelSubtitle}>Flight #</Text>
                <Text key={flight_number}>
                  {base_flight}
                </Text>
              </View>

              {/*To*/}
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.panelSubtitle}>To</Text>
                {to === 'SFO'
                  ? <Text>
                    {to}
                  </Text>
                  : item.visited_cities_full.map(city =>
                    <Text key={city}>
                      {city}
                    </Text>,
                  )}
              </View>
            </View>



          </View>
        </View>
      </View>
    );
  }
}
