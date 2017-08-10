/**
 * Created by alex.vincent on 6/29/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import DashboardButton from '../../Components/Misc/Buttons/DashboardButton';
import DevscreensButton from '../../../ignite/DevScreens/DevscreensButton.js';
import styles from '../../Components/Styles/CardStyles';
import CheckpointCard from '../../Components/Checkpoints/CheckpointCard';
import { Images } from '../../Themes';

// Styles

export default class Checkpoints extends React.Component {
  static navigationOptions = {
    title: 'Checkpoint Wait Time',
    headerStyle: {
      backgroundColor: '#184A62'
    },
  };


  render() {

    return (
      <View>
        {/*Main Content*/}
        <ScrollView>
          <CheckpointCard number="10" subtitle="Terminal 1 - F1" time="Updated - 12:21 PM" />
        </ScrollView>
      </View>
    );
  }
}
