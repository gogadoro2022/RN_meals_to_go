import React from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/RestaurantInfoCard';
import styled from 'styled-components';
import {SafeArea} from '../../../components/utility/SafeArea';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <FlatList
        data={[{name: 1}, {name: 2}, {name: 3}]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
  );
};
