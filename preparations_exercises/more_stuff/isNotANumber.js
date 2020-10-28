
function isNotANumber(value) {
  if (Number(value)) { //if Number(value) can't convert it to a number, it returns NaN, NaN is falsy
    return false;
  }
  return true;
}
/*
function isNotANumber(value) {
  return value !== value;
}
*/

console.log(isNotANumber(4));   //returns false with the LS answer. My solution returns false
console.log(isNotANumber('a'));//returns false with the LS answer, instead of true. My solution returns true
console.log(NaN);//returns NaN with the LS answer, instead of true. My solution returns NaN


//first answer does not deal with floats. I'm curious as I can't seen to get the described output from the LS solution
