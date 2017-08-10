import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.headerBackgroundColor,
  },
  headerTitleStyle: {
    color: '#FFFFFF'
  },
  tabBarStyle: {
    backgroundColor: Colors.headerBackgroundColor,
    paddingTop: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 0.33,
    elevation: 4

  },
  flightsHeader: {
    backgroundColor: Colors.headerBackgroundColor,
    elevation: 0,
    shadowOpacity: 0,
  },
  searchHeader: {
    backgroundColor: Colors.headerBackgroundColor,

  }
})
