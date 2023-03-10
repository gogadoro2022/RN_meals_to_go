import {mockImages, mocks} from './mock';
import camelize from 'camelize';

export const restaurantsRequest = location => {
  console.log('restaurant request and location :', location);
  return new Promise((resolve, reject) => {
    const rawData = mocks[location];
    if (!rawData) {
      reject('not found');
    }
    console.log('make restaurant promise and rawData :', rawData);
    resolve(rawData);
  });
};

export const restaurantsTransform = ({results = []}) => {
  console.log('restaurantTransform');
  const mappedResults = results.map(restaurant => {
    // 만약 photos 의 length가 4면 0,1,2,3 이런식.
    const randomNum = Math.floor(Math.random() * mockImages.length);
    const randomImg = [mockImages[randomNum]];
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      photos: randomImg,
    };
  });
  return camelize(mappedResults);
};
