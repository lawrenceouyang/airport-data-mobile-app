/**
 * Created by alex.vincent on 6/30/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View, Button } from 'react-native';
import DashboardButton from '../../Components/Misc/Buttons/DashboardButton';
import DevscreensButton from '../../../ignite/DevScreens/DevscreensButton.js';
import PrimaryNav from '../../Navigation/AppNavigation';

import { Images } from '../../Themes';

// Styles
import styles from '../Styles/DashboardStyles';

export default class DashboardDrawer extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) =>
      <Image
        source={require('../../Images/ir.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />,
  };

  render() {
    return (
      <Button onPress={() => this.props.navigation.navigate('Flights')} title="Go to flights" />
    );
  }
}
