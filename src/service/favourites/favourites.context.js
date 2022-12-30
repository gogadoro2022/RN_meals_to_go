import React, {createContext, useState} from 'react';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

  const add = item => {
    setFavourites(...favourites, item);
    console.log('배열', favourites);
  };

  const remove = item => {
    console.log('remove');

    const newFavourites = favourites.filter(f => item.PlaceId !== f.placeId);
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
