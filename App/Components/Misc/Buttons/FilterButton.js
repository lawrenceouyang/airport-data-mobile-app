/**
 * Created by alex.vincent on 6/29/2017.
 */
import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import ExamplesRegistry from '../../../Services/ExamplesRegistry';
import { Images } from '../../../Themes';
import styles from '../../Styles/ListItemStyles.js';

// Note that this file needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Filter Button', () =>
  <FilterButton
    text="Example Button"
    selected={true}
    onPress={() => window.alert('Pressed a Dashboard Button!')}
  />,
);

export default class FilterButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object,
  };

  getText() {
    const buttonText = this.props.text || this.props.children || '';
    return buttonText.toUpperCase();
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.selected ? styles.filterButton : styles.filterButtonUnselected}
        onPress={this.props.onPress}
      >
        <Text style={styles.filterText}>
          {this.getText()}
        </Text>
      </TouchableOpacity>
    );
  }
}
