import {createContext, useEffect, useState} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = inputKeyword => {
    setIsLoading(true);
    setKeyword(inputKeyword);
    if (!inputKeyword.length) {
      return;
    }
    // setKeyword(inputKeyword);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
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
