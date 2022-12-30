import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeArea} from '../../../components/utility/SafeArea';
import {RestaurantsNavigator} from './RestaurantsNav';
import {MapScreen} from '../../../features/map/screen/MapScreen';
import {Favourites} from '../../../components/favourites/favourites.component';

const Temporary = () => {
  <View>
    <Text>nothing</Text>
  </View>;
};
const Tab = createBottomTabNavigator();

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
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={Temporary}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
