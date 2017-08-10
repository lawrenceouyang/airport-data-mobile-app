/**
 * Created by Daniel Martin on 08/08/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import CheckpointDetail from '../../../Components/Checkpoints/CheckpointDetail';
import PreScreening from '../../../Components/Checkpoints/PreScreeningDetail';
import Screening from '../../../Components/Checkpoints/ScreeningDetail';
import { Copyright } from '../../../Components/Misc/Copyright';
// Styles
import styles from '../../Styles/DetailCheckpointInfo'

export default class CheckpointQueues extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Queues',
    headerStyle: {
      backgroundColor: '#033C56',
    },
  });

  render() {
    return (
      <View>
        {/*Main Content*/}
        <ScrollView style={styles.container}>
          <CheckpointDetail />

          <PreScreening/>
          <Screening/>

          <Copyright/>
        </ScrollView>

      </View>
    );
  }
}
