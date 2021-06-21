import {getRandomInt,getRandomFloat} from './utils.js';
import {ESTATE_TYPE,TIME_TO_CHECK,SAMPLE_PHOTOS,SAMPLE_FEATURES} from './arrays.js';

let avatarNum = 0;
let coordX = 0;
let coordY = 0;
const numberOfObjects = 10;

const getRandomArrayElement = (array) => {
  const index = getRandomInt(0,array.length-1);
  const element = array[index];
  return element;
};

const getRandomArray = (array) => {
  const index = getRandomInt(0, array.length);
  const number = getRandomInt(1, array.length+1);
  array.splice(index, number);
};

const createRandomObject = () => {
  avatarNum ++;
  coordX = getRandomFloat(35.65000, 35.70000, 5);
  coordY = getRandomFloat(139.70000, 139.80000, 5);
  const photoList = [...SAMPLE_PHOTOS];
  const featureList = [...SAMPLE_FEATURES];
  return {
    author:{
      avatar:`img/avatars/user${avatarNum}.png`,
    },
    offer : {
      title:'Сдаётся  жильё',
      address: `${coordX}, ${coordY}`,
      price: getRandomInt(1, 100000),
      type: getRandomArrayElement(ESTATE_TYPE),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 6),
      checkin:getRandomArrayElement(TIME_TO_CHECK),
      checkout:getRandomArrayElement(TIME_TO_CHECK),
      features: getRandomArray(featureList),
      description:'Просторное, чистое, соседи съехали, 5 мин до метро',
      photos: getRandomArray(photoList),
    },
    location: {
      lag: coordX,
      lng: coordY,
    },
  };
};
const randomObjects = new Array(numberOfObjects).fill().map(()=>createRandomObject());
randomObjects;
export {randomObjects};
