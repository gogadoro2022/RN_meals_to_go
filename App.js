import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infra/theme';
import {RestaurantsContextProvider} from './src/service/restaurants/restaurants.context';
import {LocationContextProvider} from './src/service/restaurants/location/location.context';
import {Navigation} from './src/infra/theme/navigation';
import {Text} from 'react-native';

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
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar />
    </>
  );
}
