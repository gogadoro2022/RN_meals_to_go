import {locations} from './location.mock';
import camelize from 'camelize';

export const locationRequest = keyword => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[keyword];
    console.log('locationRequest :', locationMock);
    console.log(' ----> tolowercase :', keyword);

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
  console.log('location transform and lat lng', lat, lng);
  return {lat, lng, viewport};
};
