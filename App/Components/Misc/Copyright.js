/**
 * Created by aayush.bhandari on 7/21/17.
 */
import React from 'react';
import { Text, View } from 'react-native';


export const Copyright = () =>
  <View style={{ alignSelf: 'center', paddingBottom: 20 }}>
    <Text style={{ fontSize: 12, alignSelf: 'center' }}>
      © {new Date().getFullYear()} San Francisco International Airport.
    </Text>
    <Text style={{ fontSize: 12, alignSelf: 'center' }}>All Rights Reserved.</Text>
  </View>;
