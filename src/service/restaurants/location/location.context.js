import {createContext, useEffect, useState} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log('locationContext 시작');

  const onSearch = searchKeyword => {
    console.log('function onSearch(시작은 san francisco):', searchKeyword);
    // setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(keyword)
      .then(result => locationTransform(result))
      .then(result => {
        console.log('function onSearch success and result :', result);
        setIsLoading(false);
        setLocation(result);
      })
      .catch(err => {
        console.log('onSearch useeffect 에러발생');
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    console.log(
      'location context useEffect and keyword(시작은 san francisco) :',
      keyword,
    );
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{
        keyword,
        isLoading,
        error,
        location,
        search: onSearch,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
