/**
 * Created by Kevin Lloyd Macayan on 8/01/2017.
 */

import React, { PropTypes } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../Styles/CheckpointDetailStyles';


export default class CheckpointDetail extends React.Component {

  render() {
    const { item } = this.props;

    return (
      <View style={styles.mainContainer}>
        {/*Main Content*/}
        <ScrollView style={styles.container}>

          {/* Checkpoint Title */}
          <View style={styles.mainPanel}>
            <View style={styles.checkpointNameContainer}>
              <Text style={styles.checkpointName}>{ item.checkpoint_name}</Text>
            </View>

            <View style={styles.checkpointDescriptionContainer}>
              <Text style={styles.checkpointDescriptionLabel}>Terminal:</Text>
              <Text>{ item.terminal_id }</Text>
            </View>

            <View style={styles.checkpointDescriptionContainer}>
              <Text style={styles.checkpointDescriptionLabel}>Checkpoint Hours: </Text>
              <Text>{ item.checkpoint_hours }</Text>
            </View>

            <View style={styles.checkpointDescriptionContainer}>
              <Text style={styles.checkpointDescriptionLabel}>Gates:</Text>
              <Text>{ item.checkpoint_gates }</Text>
            </View>

            <View style={styles.checkpointDescriptionContainer}>
              <Text style={styles.checkpointDescriptionLabel}>Current Processing Rate:</Text>
              <Text>{ item.current_processing_rate } Passengers/Hour</Text>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
