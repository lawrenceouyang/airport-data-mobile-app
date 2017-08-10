import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class EmptyPage extends React.Component {
  startSearch = () => {
    this.props.navigation.navigate('SearchMain', {
      type: 'Flight',
    });
  };
  renderEmptySearch = () => {
    return (
      <View
        style={{
          paddingTop: 50,
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name="back" size={125} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            marginVertical: 20,
            fontWeight: 'bold',
          }}
        >
          Sorry, we didn't find any results for your search
        </Text>
        <View style={{ marginBottom: 20 }}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Back to Search"
            color="#033C56"
          />
        </View>
      </View>
    );
  };
  renderEmptyFavorite = () => {
    return (
      <View
        style={{
          paddingTop: 50,
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name="aircraft-take-off" size={125} />
        <Text style={{ fontSize: 20, marginTop: 20 }}> Ready for take-off! </Text>
        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 14 }}> Your </Text>
          <Icon name="star" color="#ffdf00" size={18} />
          <Text style={{ fontSize: 14 }}> flights will show up here. </Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Button onPress={() => this.startSearch()} title="Find a Flight" color="#033C56" />
        </View>
      </View>
    );
  };
  renderEmptyDefault = () => {
    return <View />;
  };

  render() {
    const { dataType } = this.props;
    switch (dataType) {
      case 'search_data':
        return this.renderEmptySearch();
        break;
      case 'favorite_flights':
        return this.renderEmptyFavorite();
        break;
      default:
        return this.renderEmptyDefault();
    }
  }
}
