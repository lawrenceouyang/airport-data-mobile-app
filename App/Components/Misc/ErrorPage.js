import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Copyright } from './Copyright';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="aircraft-landing" size={150} />
        <Text
          style={{
            color: '#4e4e4e',
            fontSize: 30,
            textShadowColor: '#00000',
          }}
        >
          Please Try Again
        </Text>
        <Text
          style={{
            color: '##4e4e4e',
            textShadowColor: '#00000',
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Sorry, something went wrong and we had to land.
        </Text>

        <Button
          title="Try Again"
          onPress={this._handleButtonPress}
          style={{
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: '#68a0cf',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
          }}
        />
      </View>
    );
  }
}
