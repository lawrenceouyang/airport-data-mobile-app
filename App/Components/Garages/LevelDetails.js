/**
 * Created by alex.vincent on 7/28/2017.
 */
import React, { PropTypes } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import styles from '../Styles/GarageDetailStyles';

import { Images } from '../../Themes';

export default class LevelDetails extends React.Component {

  render() {
    const { item } = this.props;

    return (
      <View style={styles.subPanel}>

          <Text style={styles.panelSubtitle}>{item.level}</Text>

          <Text>{item.free_spaces} spots available</Text>

      </View>
    );
  }
}
