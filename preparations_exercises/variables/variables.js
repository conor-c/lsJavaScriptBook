//1. greeter.js
function greeter(name) {
  console.log(`Good Morning, ${name}.`);
  console.log(`Good Afternoon, ${name}.`);
  console.log(`Good Evening, ${name}.`);
};
greeter('Conor');

//2. age.js
function age(currentAge) {
  console.log(`You are ${currentAge} years old.`);
  console.log(`In 10 years, you will be ${currentAge + 10} years old.`);
  console.log(`In 20 years, you will be ${currentAge + 20} years old.`);
  console.log(`In 30 years, you will be ${currentAge + 30} years old.`);
  console.log(`In 40 years, you will be ${currentAge + 40} years old.`);
};
age(26);

//3. we should get a reference error because the variable foo is block scope.

//4. The first 4 lines of code should execute properly. On line 6 we should get an error
//I thought 7/8/9 would execute but I was wrong

//5. At first I thought that the program would log 'qux' but after thinking about it,
//I believe the second let declaration should throw an error.
//this was incorrect although it was the right kind of thinking. 
//line 3 declares a new variable that shadows(hides) foo, but once we leave the block scope
//the variable gets dropped/goes back to what it was at first.

let foo = 'bar';
{
  let foo = 'qux';
  console.log(foo); //should output 'qux'
}

console.log(foo); //should output 'bar'


//6. I understood that it was the same situation as exercise 5 but I was thrown off that 
//it was a const. It does NOT log an error.