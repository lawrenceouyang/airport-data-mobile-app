/**
 * Created by lawrence.ouyang on 7/17/2017.
 */
import React, { PropTypes } from 'react';
import ExamplesRegistry from '../../Services/ExamplesRegistry';

import Icon from 'react-native-vector-icons/FontAwesome';

// Note that this file needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Star Icon', () => <StarIcon starred={true} />);

export default class StarIcon extends React.Component {
  static propTypes = {
    starred: PropTypes.bool,
  };

  render() {
    return (
      <Icon
        name={this.props.starred ? 'star' : 'star-o'}
        color={this.props.starred ? '#ffdf00' : '#000'}
        {...this.props.style}
      />
    );
  }
}
