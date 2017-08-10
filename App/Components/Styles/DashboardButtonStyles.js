/**
 * Created by alex.vincent on 6/29/2017.
 */
import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 2,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
    marginVertical: Metrics.baseMargin,
    paddingBottom: 15,
  },
  icon: {
    color: Colors.snow,
    fontSize: 60,
  },
});
