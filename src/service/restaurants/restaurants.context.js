import React, {createContext, useContext, useEffect, useState} from 'react';
import {LocationContext} from './location/location.context';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);
  console.log('restaurant context location :', location);

  const getRestaurants = () => {
    setIsLoading(true);
    console.log('restaurants useEffect');
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then(results => {
          console.log(
            'restaurants useEffect and setRestaurant results (로우데이터가 트랜스폼 됨) :',
            results,
          );
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
