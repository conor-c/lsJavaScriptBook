let multiply = (number1, number2) => number1 * number2;

let numberGet = () => {
  let rlSync = require('readline-sync');
  let number1 = rlSync.question('Enter the first number: ');
  let number2 = rlSync.question('Enter the second number: ');
  console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
}

numberGet();

//Here I created a function that is less expandable. I could parse out the pure logic better
