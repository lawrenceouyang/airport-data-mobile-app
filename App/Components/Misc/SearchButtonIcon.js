import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/SearchBarStyles';
import { TouchableOpacity } from 'react-native';

export default class SearchPage extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon style={styles.searchButtonIcon} name="search" size={20} />
      </TouchableOpacity>
    );
  }
}
