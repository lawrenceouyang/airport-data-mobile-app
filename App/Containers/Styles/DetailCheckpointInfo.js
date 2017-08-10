/**
 * Created by Daniel Martin on 07/11/2017
 */
import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: '#f3f3f3',
    padding: 10,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  box: {
    flex: 1,
    width: 150,
    height: 150,
    backgroundColor: Colors.boxColor,
    paddingTop: 20,
    alignItems: 'center',
    margin: 10,
  },
  boxTitle: {
    fontSize: 14,
    color: Colors.frost,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  boxRow: {
    flexDirection: 'row',
    height: 100,
  },
  centered: {
    alignItems: 'center',
  },

  mainPanel: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 3,
    height: 100,
    flex: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
  },
  directionPanel: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    height: 40,
  },

  panelItems: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  panelSubtitle: {
    fontSize: 12,
    color: '#737373',
  },

  directionPanelSubtitle: {
    flexDirection: 'column',
    fontSize: 12,
    color: '#737373',
  },

  panelTitle: {
    fontSize: 13,
    paddingBottom: 5,
    paddingTop: 10,
    color: '#737373',
    alignContent: 'space-around',
  },

  arrivalTime: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#66BB6A',
  },
});
