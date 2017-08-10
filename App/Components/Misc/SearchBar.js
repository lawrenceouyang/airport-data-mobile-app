/**
 * Created by Timothy.Ngo on 7/14/2017.
 */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from '../Styles/SearchBarStyles';
import { Colors, Metrics } from '../../Themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';

//Searchbar Component that we use on the search page
export default class SearchBar extends React.Component {
  static propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    searchType: React.PropTypes.string,
    label: React.PropTypes.string,
  };

  /**
   * Handles when
   *
   * @param {any} val
   * @memberof SearchBar
   */
  render() {
    const { onSearch, onChange, searchType, label } = this.props;

    return (
      <TextField
        style={{paddingTop: 0}}
        label={label}
        tintColor={'#005978'}
        baseColor={'#868686'}
        ref="searchText"
        autoFocus={false}
        onChangeText={onChange}
        onSubmitEditing={onSearch}
        returnKeyType={'search'}
        autoCorrect={false}
      />
    );
  }
}
