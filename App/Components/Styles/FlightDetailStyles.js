/**
 * Created by Daniel Martin on 07/11/2017
 */
import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    padding:5,
    },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  box:{
    flex: 1,
    width:150,
    height:150,
    backgroundColor: Colors.boxColor,
    paddingTop: 20,
    alignItems: 'center',
    margin:10
  },
  boxTitle:{
    fontSize: 14,
    color: Colors.frost,
    fontWeight: 'bold',
    paddingTop:20
  },
  boxRow: {
    flexDirection:'row',
    height: 100,
  },
  centered: {
    alignItems: 'center'
  },

  mainPanel:{
    flexDirection:'row',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 1,
    height: 150,
    borderColor: 'red',
    flex: 5,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
  },

  directionPanel:{
    flexDirection:'row',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 3,
    height: 40,
  },

  panelItems:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "flex-start"
  },

  panelSubtitle:{
    fontSize: 14,
    color:"#737373"
  },

  directionPanelSubtitle:{
    display: "flex",
    fontSize: 12,
    color:"#033C56",

  },

  panelTitle:{
    fontSize: 13,
    paddingBottom: 8,
      marginTop: -5,
    paddingTop: 0,
    color:"#737373",
    alignContent:"space-around"
  },

  arrivalTime:{
      fontWeight: "bold",
      fontSize: 16,
      color: "#66BB6A"

  },

  panelInfo:{
      fontSize: 18
  },

  positiveStatus: {
      alignSelf: 'stretch',
      fontWeight: "bold",
      fontSize: 16,
      color: "#66BB6A"
    },
  negativeStatus: {
      alignSelf: 'stretch',
      fontWeight: "bold",
      fontSize: 14,
      color: "#EF5350"
  },

    scheduledTime:{
        alignSelf: 'stretch',
        fontSize: 12

    },

    listItemImage: {
        width: 120,
        height: 35
    }

})
