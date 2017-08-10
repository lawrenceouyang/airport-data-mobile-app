/**
 * Created by alex.vincent on 6/29/2017.
 */
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import DashboardButton from '../../Components/Misc/Buttons/DashboardButton';
import DevscreensButton from '../../../ignite/DevScreens/DevscreensButton.js';
import PrimaryNav from '../../Navigation/AppNavigation';
// Styles
import styles from '../Styles/DashboardStyles';
import headerStyles from '../../Navigation/Styles/NavigationStyles';

export default class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerStyle: {
      backgroundColor: '#184A62',
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        {/*Background Image*/}
        {/*<Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />*/}

        {/*Main Content*/}
        <ScrollView style={styles.container}>
          {/* Buttons for checkpoint fligthts and parking */}
          <View style={{ flexDirection: 'column' }}>

            <View style={styles.boxRow}>
              <DashboardButton
                text="Flights"
                icon='airplane'
                onPress={() => navigate('Flights', { navigation: navigate })}
              />
              <DashboardButton
                text="Garages"
                icon='garage'
                onPress={() => navigate('Garages')}
              />
            </View>
          </View>

          {/* Buttons for checkpoint wait-times and help */}
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.boxRow}>
              <DashboardButton
                text="Checkpoints"
                icon='flag-checkered'
                onPress={() => navigate('Checkpoints')}
              />
              <DashboardButton
                text="Help"
                icon='help'
                onPress={() => navigate('Help')} />
            </View>
          </View>

          {/* ??? */}
          {/*<View style={{ flexDirection: 'column' }}>*/}
            {/*<View style={styles.boxRow}>*/}
              {/*<DashboardButton*/}
                {/*text="Navigation"*/}
                {/*icon='map-marker'*/}
                {/*onPress={() => navigate('Help')}*/}
              {/*/>*/}
              {/*<DashboardButton*/}
                {/*text="Concessions"*/}
                {/*icon='food'*/}
                {/*onPress={() => navigate('Help')} />*/}
            {/*</View>*/}
          {/*</View>*/}

          <View style={styles.section}>
            <DevscreensButton />
          </View>
        </ScrollView>
      </View>
    );
  }
}
