/**
 * Created by alex.vincent on 6/29/2017.
 */
import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    margin: 8,
  },
  vC: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.boxColor,
    paddingTop: 15,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  boxTitle: {
    fontSize: 14,
    color: Colors.frost,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  boxRow: {
    flexDirection: 'row',
  },
  centered: {
    alignItems: 'center',
  },
  dashImage: {
    height: 300,
  },
});
