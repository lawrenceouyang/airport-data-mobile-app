/**
 * Created by alex.vincent on 7/28/2017.
 */
import React, { PropTypes } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import styles from '../Styles/GarageDetailStyles';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/';
import moment from 'moment';

import { Images } from '../../Themes';

// Styles

export default class GarageDetails extends React.Component {

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

  render() {
    const { item } = this.props;

    return (
      <ScrollView>

        {/*Main Content*/}

        <View style={styles.mainPanel}>

          <View style={{ flexDirection: 'column', flex: 1 }}>

            <View style={{ flex: 2 }}>
              <Text style={styles.panelSubtitle}>Spots Available</Text>
              <Text style={styles.numberText}>{item.free_spaces}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.panelSubtitle}>Max Capacity</Text>
              <Text>{item.total_spaces}</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'column', alignSelf: 'center', flex: 1 }}>

            <View style={{ flex: 1 }}>
              <Text style={styles.panelSubtitle}>Garage Status</Text>
              <Text style={this.getStatusStyle(String(item.status).toUpperCase())}>
                {item.status != null ? this.getStatusAlias(String(item.status).toUpperCase()) : 'Unavailable'}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.panelSubtitle}>Garage Type</Text>
              <Text>{item.garage_type}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.panelSubtitle}>Last Updated</Text>
              <Text>{moment(item.updated_at).format('DD/MM/YY - h:MM A').toString()}</Text>
            </View>

          </View>

        </View>


      </ScrollView>
    );
  }
}
