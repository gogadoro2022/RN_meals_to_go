import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeArea} from '../../../components/utility/SafeArea';
import {RestaurantsNavigator} from './RestaurantsNav';

const Tab = createBottomTabNavigator();
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurants: 'fast-food-outline',
  Map: 'map-outline',
  Settings: 'settings-outline',
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const iconName = TAB_ICON[route.name];
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
        })}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Map" component={Map} options={{headerShown: false}} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
