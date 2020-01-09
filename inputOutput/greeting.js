/*let greetingMessage = 'Good Morning!';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

greetPeople();
changeGreetingMessage('Good Evening');
greetPeople();*/
function greetPeople() {
  let greetingMessage = 'Good Morning';
  console.log(greetingMessage);
}

greetPeople(); //should log Good Morning
console.log(greetingMessage); // should be a ReferenceError