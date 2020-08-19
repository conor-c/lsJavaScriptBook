let add = (a, b) => a + b; //an arrow function with 1 expression doesn't need curly braces
//and has an implicit return
let getNumber = text => { //get number allows an argument to be passed
  let input = prompt(text); // input is initialized with a function prompt that's passed text
  return Number(input); 
}

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter another number: ');
console.log(add(number1, number2));