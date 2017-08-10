/**
 * Created by alex.vincent on 6/29/2017.
 */
import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../Containers/Styles/DashboardStyles.js';
import ExamplesRegistry from '../Services/ExamplesRegistry';
import { Images } from '../Themes';

// Note that this file needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Filter Button', () =>
  <FilterButton
    text="Example Button"
    image={Images.flights}
    onPress={() => window.alert('Pressed a Dashboard Button!')}
  />,
);

export default class FilterButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object,
  };

  getText() {
    const buttonText = this.props.text || this.props.children || '';
    return buttonText.toUpperCase();
  }

  getImage() {
    return this.props.image || this.props.children || '';
  }

  render() {
    return (
      <TouchableOpacity style={styles.filterButton} onPress={this.props.onPress}>
        <Image source={this.getImage()} style={styles.icon} />
        <Text style={styles.filterText}>
          {this.getText()}
        </Text>
      </TouchableOpacity>
    );
  }
}
