import React from 'react';
import {StatusBar, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {RestaurantsScreen} from './src/features/restaurants/screens/RestaurantsScreen';
import {theme} from './src/infra/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from './src/components/utility/SafeArea';

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

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = 'fast-food-outline';
                } else if (route.name === 'Map') {
                  iconName = 'map-pin';
                } else if (route.name === 'Settings') {
                  iconName = 'settings-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}>
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Map"
              component={Map}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: false}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar />
    </>
  );
}
