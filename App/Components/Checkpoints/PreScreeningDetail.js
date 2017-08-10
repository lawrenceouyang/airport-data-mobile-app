/**
 * Created by Kevin Lloyd Macayan on 8/01/2017.
 */

import React, { PropTypes } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../Styles/CheckpointDetailStyles';

export default class PreScreeningDetail extends React.Component {
  static navigationOptions = {
    title: 'Checkpoint Profile',
    headerStyle: {
      backgroundColor: '#033C56',
    },
  };

  render() {

    //const { navigate } = this.props.navigation.navigate;

      CheckpointQueues = () => {
          this.props.navigation.navigate('SearchMain', {
              type: 'Garage',
          });
      };

    return (
      <View style={styles.mainContainer}>
        {/*Main Content*/}
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.panelTitle}>PreScreening Queues </Text>
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
                  <Text style={styles.cardTitle}>Crew</Text>
                  <Text style={styles.cardDetails}>Wait Time: 15 min</Text>
                  <Text style={styles.cardDetails} ># of people in line: 190</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <View style={styles.screeningCard}>
                  <Text style={styles.cardTitle}>Wheelchair</Text>
                  <Text style={styles.cardDetails}>Wait Time: 15 min</Text>
                  <Text style={styles.cardDetails} ># of people in line: 190</Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={styles.screeningCard}>
                <Text style={styles.cardTitle}>Medical</Text>
                <Text style={styles.cardDetails}>Wait Time: 15 min</Text>
                <Text style={styles.cardDetails} ># of people in line: 190</Text>
              </View>
            </View>

          </ScrollView>

        </View>
      </View>
    );
  }
}
