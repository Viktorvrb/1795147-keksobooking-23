const getRandomInt = (a, b) => {
  if (a % 1 !== 0 || b % 1 !== 0) {
    throw new Error ('Only Int Numbers Allowed As The Parameters');
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return min + Math.floor(Math.random() * (max - min));
};

const getRandomFloat = (a, b, n) => {
  if (n < 0) {
    throw new Error ('Parameters invalid');
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return Number((min + (Math.random() * (max - min))).toFixed(n));
};

getRandomInt();
getRandomFloat();
