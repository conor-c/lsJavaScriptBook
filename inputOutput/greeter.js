/*let rlSync = require('readline-sync');
getName();
function getName() {
  let firstName = rlSync.question('What is your first name? ');
  let lastName = rlSync.question('What is your last name? ');
  console.log(`Welcome to the show, ${firstName} ${lastName}.`);
}*/

function getName(promptText) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(promptText);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`${firstName} ${lastName}, welcome to the show!`);

