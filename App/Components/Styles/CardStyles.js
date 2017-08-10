/**
 * Created by kvillalobos on 7/21/2017.
 */
import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection:'row',
    margin: 10,
    padding:10,
    backgroundColor:'#fff',
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    }
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 16,
    paddingLeft: 20,
    paddingBottom: 16,
    paddingTop: 20
  },
  subtitleText: {
    fontSize:13,
    paddingLeft:16,
    paddingTop:5,
    paddingBottom:5,
    color: '#737373'
  },
  subtitleBottomTextPositive: {
    fontSize:13,
    paddingLeft:16,
    paddingTop:5,
    paddingBottom:5,
    color: Colors.positiveStatus,
  },
  subtitleBottomTextWarning: {
    fontSize:13,
    paddingLeft:16,
    paddingTop:5,
    paddingBottom:5,
    color: Colors.warningStatus,
  },
  subtitleBottomTextNegative: {
    fontSize:13,
    paddingLeft:16,
    paddingTop:5,
    paddingBottom:5,
    color: Colors.negativeStatus,
  },
  timeText: {
    fontSize:12,
    paddingLeft:210,
    color: 'rgba(0 ,0 ,0 , 0.38)'
  },
  middleText: {
    fontSize:16,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:50,
    color:Colors.coal,
  },
  numberText: {
    fontSize: 30,
    paddingLeft:16,
    color:Colors.coal,
  },
  statusGreen: {
    flexDirection:'row',
    height:90,
    width:10,
    backgroundColor: '#66BB6A',
  },
  statusRed: {
    flexDirection:'row',
    height:90,
    width:10,
    backgroundColor: 'red',
  },
  statusYellow: {
    flexDirection:'row',
    height:90,
    width:10,
    backgroundColor: '#FBC02D',
  }

})

