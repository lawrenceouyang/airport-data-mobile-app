import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigation from './AppNavigation';
import BackHandler from 'react-native';

// here is our redux-aware our smart component
export class ReduxNavigation extends React.Component {

  constructor(props) {
    super(props);
  }

  /* Handle Android hardware back presses by traversing up the navigator */
  componentWillMount() {
    BackHandler.BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, navigation, nav } = this.props;
      dispatch({ type: 'Navigation/BACK' });
      return true;
    });
  }

  /* Return the default navigator with the redux / dispatch passed as props */
  render() {
    let { dispatch, nav } =  this.props;
    return <AppNavigation
      navigation={ReactNavigation.addNavigationHelpers({ dispatch, state: nav, })} />;
  }
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
