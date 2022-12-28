import React, {createContext, useEffect, useState} from 'react';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {}, 2000);
    restaurantsRequest()
      .then(restaurantsTransform)
      .then(results => {
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

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
