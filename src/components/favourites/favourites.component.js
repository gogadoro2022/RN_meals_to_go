import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useContext} from 'react';
import {FavouritesContext} from '../../service/favourites/favourites.context';

const FavouritesBtn = styled(TouchableOpacity)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 9;
`;

const {addToFavourites, removeFromFavourites, favourites} =
  useContext(FavouritesContext);

export const Favourite = ({restaurant}) => {
  // const isFavourites = likes.find(r => {
  //   r.placeId === restaurant.placeId;
  // });

  return (
    <FavouritesBtn
      onPress={() =>
        // isFavourites
        // ? removeFromFavourites(restaurant)
        addToFavourites(restaurant)
      }>
      <Icon
        // name={isFavourites ? 'heart' : 'hearto'}
        name="hearto"
        size={25}
        color="white"
      />
    </FavouritesBtn>
  );
};
