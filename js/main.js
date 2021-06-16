const getRandomInt = (value1, value2) => {
  if (value1 % 1 !== 0 || value2 % 1 !== 0) {
    throw new Error ('Only Int Numbers Allowed As The Parameters');
  }

  const min = Math.min(value1, value2);
  const max = Math.max(value1, value2);

  return min + Math.floor(Math.random() * (max - min));
};

const getRandomFloat = (value1, value2, num) => {
  if (num < 0) {
    throw new Error ('Parameters invalid');
  }

  const min = Math.min(value1, value2);
  const max = Math.max(value1, value2);

  return Number((min + (Math.random() * (max - min))).toFixed(num));
};

const estateType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timetoCheck = ['12:00', '13:00', '14:00'];
let avatarNum = 0;
let coordX = 0;
let coordY = 0;
const numberOfObjects = 10;

const getRandomArrayElement = (element) => element [getRandomInt(0, element.length-1)];

const getRandomArray = (array) => array.splice (getRandomInt(0, array.length), getRandomInt(1, array.length+1));

const createRandomObject = () => {
  avatarNum ++;
  coordX = getRandomFloat(35.65000, 35.70000, 5);
  coordY = getRandomFloat(139.70000, 139.80000, 5);
  const samplePhoto = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
  const comfiBonus = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  return {
    author:{
      avatar:`img/avatars/user${  avatarNum  }.png`,
    },
    offer : {
      title:'Сдаётся  жильё',
      adress: `${coordX  }, ${  coordY}`,
      price: getRandomInt (1, 100000),
      type: getRandomArrayElement (estateType),
      rooms: getRandomInt (1, 5),
      guests: getRandomInt (1, 6),
      checkin:getRandomArrayElement (timetoCheck),
      checkout:getRandomArrayElement (timetoCheck),
      features: getRandomArray (comfiBonus),
      description:'Просторное, чистое, соседи съехали, 5 мин до метро',
      photos: getRandomArray (samplePhoto),
    },
    location: {
      lag: coordX,
      lng: coordY,
    },
  };
};
const randomObjects = new Array(numberOfObjects).fill().map(()=>createRandomObject());
randomObjects;
