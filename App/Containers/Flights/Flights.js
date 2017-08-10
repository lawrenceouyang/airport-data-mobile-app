/**
 * Created by alex.vincent on 6/29/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import DashboardButton from '../../Components/Misc/Buttons/DashboardButton';
import DevscreensButton from '../../../ignite/DevScreens/DevscreensButton.js';

import { Images } from '../Themes';

// Styles
import styles from '../Styles/DashboardStyles';

export default class Flights extends React.Component {
  static navigationOptions = {
    title: 'Flights',
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/*Main Content*/}
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>Welcome to the Flights Module</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
