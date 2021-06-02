const getRandomIntRound=(min, max)=>{
  if (min%1!==0 && max%1!==0){
    throw new Error ('Only Int Numbers Allowed As The Parameters');
  }
  if (min>max){
    const swap = max;
    max =min;
    min =swap;
  }
  return Math.floor(Math.random() * (max - min)) + min;//<--фрагмент кода взят из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};
getRandomIntRound();
const getRandomIntFloat=(min, max, dig)=>{
  if (min>=0 && dig>=0 && dig<20){
    if (min>max){
      const swap = max;
      max =min;
      min =swap;
    }
    const num = (Math.random() * (max - min)) + min;//<--фрагмент кода взят из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return +num.toFixed(dig);
  } else {
    throw new Error ('Parameters invalid');
  }
};
getRandomIntFloat ();
