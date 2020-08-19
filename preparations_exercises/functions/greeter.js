let getName = () => {
  let rlSync = require('readline-sync');
  firstName = rlSync.question('What is your first name? ');
  lastName = rlSync.question('What is your last name? ');
  return firstName + ' ' + lastName;
}
console.log(`Hello ${getName()}, it's nice to meet you.`);

/*
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
*/

/*
My solution is on the top. Some differences:
My solution does not allow the prompt to be easily changeable.
  Some issues with that
  It can't be easily used to gather other types of information
  It's strictly stuck asking for first and last name in a specific way
Some nice things is I'm demonstrating function composition with the console log
But overall I did not solicit the users first and last name in seperate invocations
which means I was incorrect
*/