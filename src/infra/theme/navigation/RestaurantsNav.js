import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RestaurantsScreen} from '../../../features/restaurants/screens/RestaurantsScreen';
import {Text} from 'react-native';
import RestaurantDetail from '../../../features/restaurants/screens/RestaurantDetail';

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}>
      <RestaurantsStack.Screen
        name="RestaurantsStack"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantsStack.Navigator>
  );
};
