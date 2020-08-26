/*
function factorial(number) {
  if (number <= 1) return 1;
  return factorial(number - 1) * number;
}
*/

//didn't realize I was supposed to use a for loop
//updated code
//Guess I'll go with this for question 6
//I should not have an if statement without {} unless its a break or continue.

function factorial(number) {
  let result = 1;
  for (let f = number; f > 0; f -= 1) {
    result = result * f;
  }
  return result;
}
//in retrospect, f is not a good variable name for this job.

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(8)); //40320

