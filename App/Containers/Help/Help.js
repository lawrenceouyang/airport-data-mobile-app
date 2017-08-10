/**
 * Created by alex.vincent on 6/29/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import Colors from '../../Themes/Colors'
import DashboardButton from '../../Components/Misc/Buttons/DashboardButton';
import DevscreensButton from '../../../ignite/DevScreens/DevscreensButton.js';

import { Images } from '../../Themes';

// Styles
import styles from '../Styles/DashboardStyles';

export default class Help extends React.Component {
  static navigationOptions = {
    title: 'Help',
    headerStyle: {
      backgroundColor: Colors.headerBackgroundColor,
    },
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/*Main Content*/}
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>View Helpful Information Here</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
