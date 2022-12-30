import React, {createContext, useContext, useEffect, useState} from 'react';
import {LocationContext} from './location/location.context';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);
  // location = lat, lng

  console.log('restaurant context and location :');

  const getRestaurants = loc => {
    setIsLoading(true);
    console.log('function getRestaurants 응답은 2초 시간걸림');
    setTimeout(() => {
      console.log('2sec complete');
      restaurantsRequest(loc)
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
    if (location) {
      console.log('restaurants context useEffect');
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
