import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import {FavouritesContext} from '../../service/favourites/favourites.context';

const FavouriteBtn = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({restaurant}) => {
  const {addToFavourites, removeFromFavourites, favourites} =
    useContext(FavouritesContext);

  const isFavourites = favourites.find(r => r.placeId === restaurant.placeId);

  return (
    <FavouriteBtn
      onPress={() => {
        console.log(!isFavourites);
        !isFavourites
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant);
      }}>
      <Icon
        name={isFavourites ? 'heart' : 'hearto'}
        size={24}
        color={isFavourites ? 'red' : 'white'}
      />
    </FavouriteBtn>
  );
};
