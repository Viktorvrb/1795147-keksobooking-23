const getRandomIntRound=(min, max)=>{
  if (min%1!==0 && max%1!==0){
    throw new Error ('Only Int Numbers Allowed As The Parameters');
  }
  if (min>max){
    const swap = max;
    max =min;
    min =swap;
  }
  return Math.floor(Math.random() * (max - min)) + min;
};
getRandomIntRound();
const getRandomIntFloat=(min, max, dig)=>{
  if (min>=0 && dig>=0 && dig<20){
    if (min>max){
      const swap = max;
      max =min;
      min =swap;
    }
    const num = (Math.random() * (max - min)) + min;
    return +num.toFixed(dig);
  } else {
    throw new Error ('Parameters invalid');
  }
};
getRandomIntFloat ();
