import React from 'react';
import {FlatList, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/RestaurantInfoCard';
import styled from 'styled-components';
import {SafeArea} from '../../../components/utility/SafeArea';
import {useContext} from 'react';
import {RestaurantsContext} from '../../../service/restaurants/restaurants.context';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const {restaurants} = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          console.log(item);
          return <RestaurantInfoCard />;
        }}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
  );
};
