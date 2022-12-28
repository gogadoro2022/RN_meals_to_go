import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {RestaurantInfoCard} from '../components/RestaurantInfoCard';
import {SafeArea} from '../../../components/utility/SafeArea';
import {useContext} from 'react';
import {RestaurantsContext} from '../../../service/restaurants/restaurants.context';
import {Search} from '../components/Search.js';
import LoadingIndicator from '../../../components/utility/LoadingIndicator';

export const RestaurantsScreen = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);
  console.log('restaurant screen start');
  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
  );
};
