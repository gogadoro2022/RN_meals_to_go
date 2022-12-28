import React, {createContext, useContext, useEffect, useState} from 'react';
import {LocationContext} from './location/location.context';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const locationContext = useContext(LocationContext);
  console.log('restaurant context location context :', locationContext);

  const getRestaurants = () => {
    setIsLoading(true);
    console.log('function getRestaurants 응답은 2초 시간걸림');
    setTimeout(() => {
      console.log('2sec complete');
      restaurantsRequest()
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
          console.log('get restaurant error');
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    console.log('restaurants context useEffect');
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
