import {StyleSheet} from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'


export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.baseMargin,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    width: Metrics.screenWidth - Metrics.doubleBaseMargin
  },
  searchInput: {
    flex: 5,
    height: Metrics.searchBarHeight,
    alignSelf: 'center',
    padding: Metrics.smallMargin,
    textAlign: 'left',
    fontFamily: Fonts.type.base,
    fontSize: 20,
    paddingLeft: 30,
    color: Colors.charcoal,
    flexDirection: 'row',

  },
  searchIcon: {
    left: Metrics.doubleBaseMargin,
    alignSelf: 'center',
    color: Colors.charcoal,
    backgroundColor: Colors.transparent
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.baseMargin
  },
  buttonLabel: {
    color: Colors.charcoal,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular
  },
  searchButtonIcon: {
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    alignSelf: 'center',
    color: Colors.snow
  },
  searchButton:{
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    color: Colors.snow,
    fontSize: 16,
    justifyContent: 'center'
  },
  searchBar: {
    paddingLeft: 30,
    paddingBottom: 0,
    fontSize: 22,
    height: 25,
    flex: .1,
    borderWidth: 9,
    borderColor: '#E4E4E4',
  }
})
