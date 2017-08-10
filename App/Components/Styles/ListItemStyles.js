/**
 * Created by alex.vincent on 7/10/2017.
 */
import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  flightListItem: {
    flexDirection: "row",
    backgroundColor: Colors.listItemBackground,
    flex: 1,
    height: 75,
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 1
  },
  garageListItem: {
    backgroundColor: Colors.listItemBackground
  },
  checkpointListItem: {
    backgroundColor: Colors.listItemBackground
  },
  listItemImage: {
    width: null,
    height: 75,
  },
  primaryText: {
    fontSize: 16,
    color: Colors.coal
  },
  secondaryText: {
    fontSize: 14,
    color: Colors.charcoal
  },
  starStyle: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  positiveStatus: {
    fontSize: 12,
    color: "#66BB6A",
    paddingBottom: 2,
  },
  negativeStatus: {
    fontSize: 12,
    color: "#EF5350",
    paddingBottom: 2,
  },
  filterButton: {
    width: 85,
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#034f74',
    marginRight: 10,
  },
  filterButtonUnselected: {
    width: 85,
    height: 30,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginRight: 10,
  },
  filterText: {
    alignSelf: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color:'#ffffff'
  }
})
