//1
let myName = 'Conor' + ' ' + 'Chung';
console.log(myName);

//2
let practiceNumber = 4936;
let thousandsPlace = parseInt(practiceNumber / 1000); // 4.936
let hundredsPlace = parseInt((practiceNumber - (thousandsPlace * 1000)) / 100); // 9.36
let tensPlace = parseInt(((practiceNumber - (thousandsPlace * 1000)) - (hundredsPlace * 100)) / 10); // 3.6
let onesPlace = parseInt(((practiceNumber - (thousandsPlace * 1000)) - (hundredsPlace * 100)) - (tensPlace * 10));
console.log(practiceNumber);
console.log(thousandsPlace);
console.log(hundredsPlace);
console.log(tensPlace);
console.log(onesPlace);
console.log(practiceNumber);

//3
console.log(typeof 'true'); //string
console.log(typeof false); //boolean
console.log(typeof 1.5); //number
console.log(typeof 2); //number
console.log(typeof undefined) //undefined
console.log(typeof {foo: 'bar'}); //object

//4
/*
statement
expression
expression
*/

//5
//because upon encountering a string, the number 10 is implictly coerced into a string, and then concatenated

//6
console.log('5' + 10);
console.log(Number('5') + 10);

//7
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

//8
//no, it will return undefined. JavaScript generally fails silently.

//9
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

//10
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};

//11
//false

//12
//3, parseInt starts returning numbers on the first valid digit, and stops upon encountering anything that is not a number

//13
//when comparing strings JS does a character by character comparison
