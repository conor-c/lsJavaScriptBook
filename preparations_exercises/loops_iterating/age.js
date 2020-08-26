let rlSync = require('readline-sync');
let currentAge = Number(rlSync.question('How old are you?\n'));
currentAge = parseInt(currentAge);
function ageAdder(age) {
  console.log(`You are ${age} years old.`);
  for (let i = 1; i < 5; i += 1) {
    age += 10;
    console.log(`In ${i * 10} years, you will be ${age} years old.`);
  }
}
/*function ageAdder(age) {
  console.log(`You are ${age} years old.`);
  console.log(`In 10 years, you will be ${age + 10} years old.`);
  console.log(`In 20 years, you will be ${age + 20} years old.`);
  console.log(`In 30 years, you will be ${age + 30} years old.`);
  console.log(`In 40 years, you will be ${age + 40} years old.`);
}*/
ageAdder(currentAge);