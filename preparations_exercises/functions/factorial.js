function times (number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let factorial1 = times(1, 1);
let factorial2 = times(factorial1, 2);
let factorial3 = times(factorial2, 3);
let factorial4 = times(factorial3, 4);
let factorial5 = times(factorial4, 5);

//I was struggling because I had factorial1 = to a console.log(1)
//which of course returns undefined.