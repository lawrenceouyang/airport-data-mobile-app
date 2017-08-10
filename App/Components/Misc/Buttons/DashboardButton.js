/**
 * Created by alex.vincent on 6/29/2017.
 */
import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../../Containers/Styles/DashboardStyles.js';
import dbStyles from '../../Styles/DashboardButtonStyles';
import ExamplesRegistry from '../../../Services/ExamplesRegistry';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Note that this file needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Dashboard Button', () =>
  <DashboardButton
    text='Example Button'
    icon='parking'
    onPress={() => window.alert('Pressed a Dashboard Button!')}
  />,
);

export default class DashboardButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object,
    icon: PropTypes.string

  };

  getText() {
    const buttonText = this.props.text || this.props.children || '';
    return buttonText.toUpperCase();
  }

  getIcon() {
    return this.props.icon || this.props.children || '';
  }

  render() {
    return (
      <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
        <Icon
          name={this.getIcon()}
          color={'#fff'}
          size={75}
        />
        <Text style={dbStyles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    );
  }
}
