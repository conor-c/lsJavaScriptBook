let rlSync = require('readline-sync');
// a todo program that only takes 3 todos and you can't check them off
let task1 = rlSync.question('What is your first task?: ', {
  hideEchoBack: true
});
let task2 = rlSync.question('What is your second task?: ', {
  hideEchoBack: true
});
let task3 = rlSync.question('What is your third and final task?: ', {
  hideEchoBack: true
});

console.log(`Your first task is: ${task1}`);
console.log(`Your second task is: ${task2}`);
console.log(`Your third and final task is: ${task3}`);