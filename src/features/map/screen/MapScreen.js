import React, {useContext, useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styled from 'styled-components/native';
import {LocationContext} from '../../../service/restaurants/location/location.context';
import {RestaurantsContext} from '../../../service/restaurants/restaurants.context';
import {MapSearch} from '../component/MapSearch';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = () => {
  const [latDelta, setLatDelta] = useState(0);
  const {location} = useContext(LocationContext);
  const {viewport, lat, lng} = location;
  const {restaurants} = useContext(RestaurantsContext);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>
        {restaurants.map(restaurant => {
          console.log(restaurant);
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </Map>
    </>
  );
};
