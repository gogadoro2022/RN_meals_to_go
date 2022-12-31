import {locations} from './location.mock';
import camelize from 'camelize';

export const locationRequest = keyword => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[keyword];

    if (!locationMock) {
      reject(`location not found`);
    }
    resolve(locationMock);
  });
};

export const locationTransform = result => {
  const formattedResponse = camelize(result);
  const {geometry} = formattedResponse.results[0];
  const {lat, lng} = geometry.location;
  const viewport = geometry.viewport;
  return {lat, lng, viewport};
};
