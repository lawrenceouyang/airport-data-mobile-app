/**
 * Created by Kevin Lloyd Macayan on 8/01/2017.
 */

import React, { PropTypes } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../Styles/CheckpointDetailStyles';


export default class CheckpointDetail extends React.Component {
  static navigationOptions = {
    title: 'Checkpoint Profile',
    headerStyle: {
      backgroundColor: '#033C56',
    },
  };

  render() {

    return (
      <View style={styles.mainContainer}>
        {/*Main Content*/}
        <ScrollView style={styles.container}>
          {/*Flight Details*/}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.panelTitle}>Screening Queues </Text>
              {/*<Text style={styles.seeAll} onPress={() => navigate('CheckpointQueues')}>See All ></Text>*/}
          </View>

          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ flexDirection: 'row', paddingRight: 10 }}
          >
            <View style={styles.queueRows}>

              <View style={{ flexDirection: 'column' }}>
                <View style={styles.screeningCard}>
                  <Text style={styles.cardTitle}>Lane 1</Text>
                  <Text style={styles.cardDetails}>Wait Time: 15 min</Text>
                  <Text style={styles.cardDetails} ># of people in line: 190</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <View style={styles.screeningCard}>
                  <Text style={styles.cardTitle}>Lane 2</Text>
                  <Text style={styles.cardDetails}>Wait Time: 15 min</Text>
                  <Text style={styles.cardDetails} ># of people in line: 190</Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={styles.screeningCard}>
                <Text style={styles.cardTitle}>Lane 3</Text>
                <Text style={styles.cardDetails}>Wait Time: 15 min</Text>
                <Text style={styles.cardDetails} ># of people in line: 190</Text>
              </View>
            </View>

          </ScrollView>


          </ScrollView>

        </View>
    );
  }
}
