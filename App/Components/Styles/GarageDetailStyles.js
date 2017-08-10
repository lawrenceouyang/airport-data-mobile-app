/**
 * Created by alex.vincent on 7/31/2017.
 */
import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    padding:10,
    backgroundColor: '#f3f3f3'
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
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 1,
    height: 200,
    borderColor: 'red',
    marginBottom: 20,
    flex: 5,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
  },

  subPanel:{
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 1,
    height: 75,
    borderColor: 'red',
    flex: 5,
    marginBottom: 10,
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

  subtitleBottomTextPositive: {
    fontSize:13,
    paddingTop:5,
    paddingBottom:5,
    color: '#66BB6A'
  },
  subtitleBottomTextNegative: {
    fontSize:13,
    paddingTop:5,
    paddingBottom:5,
    color: '#EF5350'
  },

  numberText: {
    fontSize: 40,
    color:Colors.coal
  },

  directionPanelSubtitle:{
    display: "flex",
    fontSize: 12,
    color:"#033C56",

  },

  panelTitle:{
    fontSize: 13,
    paddingBottom: 8,
    paddingTop: 0,
    color:"#737373",
    alignContent:"space-around"
  },


  panelInfo:{
    fontSize: 18
  },

  positiveStatus: {
    alignSelf: 'stretch',
    fontSize: 14,
    color: "#66BB6A"
  },
  negativeStatus: {
    alignSelf: 'stretch',
    fontSize: 13,
    color: "#EF5350"
  },

  scheduledTime:{
    alignSelf: 'stretch',
    fontSize: 12

  },

})
