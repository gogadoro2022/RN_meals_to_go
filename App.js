import React from 'react';
import {StatusBar, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {RestaurantsScreen} from './src/features/restaurants/screens/RestaurantsScreen';
import {theme} from './src/infra/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from './src/components/utility/SafeArea';
import Icon from 'react-native-vector-icons/Ionicons';
import {restaurantsRequest} from './src/service/restaurants/restaurants.service';
import {RestaurantsContextProvider} from './src/service/restaurants/restaurants.context';
import {LocationContextProvider} from './src/service/restaurants/location/location.context';

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

// const createNavIcon = ({route}) => {
//   const iconName = TAB_ICON[route.name];

//   return {
//     tabBarIcon: ({color, size}) => {
//       return <Icon name={iconName} color={color} size={size} />;
//     },
//   };
// };

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
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
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar />
    </>
  );
}
