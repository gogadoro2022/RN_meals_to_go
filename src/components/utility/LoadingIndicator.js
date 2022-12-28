import React from 'react';
import {ActivityIndicator} from 'react-native';
import {View} from 'react-native';

export default function LoadingIndicator() {
  return (
    <View style={{position: 'absolute', top: '50%', left: '50%'}}>
      <ActivityIndicator />
    </View>
  );
}
