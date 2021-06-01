function getRandomIntRound(min, max) {
  if (min>=0 && max>min){
    min = Math.round(min);//<--фрагмент кода взят https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    max = Math.round(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;//<--
  } else {
    return 'неверные значения диапазона';
  }
}
getRandomIntRound();
function getRandomIntFloat(min, max, dig) {
  if (min>=0 && max>min && dig>=0 && dig<20){
    const num = (Math.random() * (max - min + 1)) + min;
    return +num.toFixed(dig);
  } else {
    return 'неверные значения диапазона и количество знаков после запятой';
  }
}
getRandomIntFloat ();
