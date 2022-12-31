import React, {createContext, useContext, useEffect, useState} from 'react';
import {LocationContext} from './location/location.context';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const getRestaurants = loc => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch(error => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      getRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        isLoading: isLoading,
        error: error,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
