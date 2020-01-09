/*multiply();
function multiply() {
  let readlineSync = require('readline-sync');
  let firstNumber = readlineSync.question('Enter the first number: ');
  let secondNumber = readlineSync.question('Enter the second number: ');
  let sum = firstNumber * secondNumber;
  console.log(`${firstNumber} * ${secondNumber} = ${sum}`);
}*/

/*let multiply = (a, b) => a * b;
let promptOne = prompt => {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}
let promptTwo = prompt => {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}
console.log(multiply(promptOne('Enter the first number: '), promptTwo('Enter the second Number: ')));
*/

let multiply = (a, b) => a * b;

let terminalPrompt = prompt => {
  let readlineSync = require('readline-sync');
  return readlineSync.question(prompt);
}

let numberOne = parseFloat(terminalPrompt('Enter the first Number: '));
let numberTwo = parseFloat(terminalPrompt('Enter the second Number: '));
console.log(`${numberOne} * ${numberTwo} = ${multiply(numberOne, numberTwo)}`);