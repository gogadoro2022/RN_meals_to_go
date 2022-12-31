import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {RestaurantInfoCard} from '../components/RestaurantInfoCard';
import {SafeArea} from '../../../components/utility/SafeArea';
import {useContext} from 'react';
import {RestaurantsContext} from '../../../service/restaurants/restaurants.context';
import {Search} from '../components/Search.js';
import LoadingIndicator from '../../../components/utility/LoadingIndicator';

export const RestaurantsScreen = ({navigation}) => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {restaurant: item})
              }>
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
  );
};
