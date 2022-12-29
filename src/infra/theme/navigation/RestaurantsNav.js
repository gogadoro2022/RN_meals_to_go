import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RestaurantsScreen} from '../../../features/restaurants/screens/RestaurantsScreen';
import {Text} from 'react-native';

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={() => <Text>restaurant detail</Text>}
      />
    </RestaurantsStack.Navigator>
  );
};
