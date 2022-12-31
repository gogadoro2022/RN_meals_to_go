import React, {createContext, useState} from 'react';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

  const add = restaurant => {
    setFavourites([...favourites, restaurant]);
    console.log('restaurant :', restaurant);
    console.log('배열', favourites);
  };

  const remove = restaurant => {
    const newFavourites = favourites.filter(
      item => restaurant.placeId !== item.placeId,
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};
