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
getRandomInt ();
getRandomFloat ();
export {getRandomInt, getRandomFloat};
