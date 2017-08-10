/**
 * Created by alex.vincent on 6/29/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';

import styles from '../../Styles/DetailCheckpointInfo';

import CheckpointActions from '../../../Redux/CheckpointRedux';

import CheckpointDetail from '../../../Components/Checkpoints/CheckpointDetail';
import PreScreening from '../../../Components/Checkpoints/PreScreeningDetail';
import Screening from '../../../Components/Checkpoints/ScreeningDetail';

import { Copyright } from '../../../Components/Misc/Copyright';


export default class CheckpointProfile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.checkpoint_name,
    headerStyle: {
      backgroundColor: '#033C56',
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      checkpointDetail: [],
      prescreening_queues: [ ],
      screening_queues: [ ],
    }
  }


  render() {
    const { item } = this.props.navigation.state.params;

    return (
      <View>
        {/*Main Content*/}
        <ScrollView style={styles.container}>
          <CheckpointDetail item={ item }/>

          <PreScreening prescreening_queues={ this.state.prescreening_queues } />
          <Screening screening_queues={ this.state.screening_queues } />

          <Copyright/>
        </ScrollView>

      </View>
    );
  }
}
