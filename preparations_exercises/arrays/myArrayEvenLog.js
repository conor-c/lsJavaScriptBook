/* answer to question 2
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.forEach(num => {
  if (num % 2 === 0) {
    console.log(num)
  }
});
*/

let myArray = [
  1, 3, 6, 11,
  4, 2, 4,
  9, 17, 16, 0,
];

/*
myArray.forEach(innerArray => {
  innerArray.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});
*/


let mapArray = myArray.map(evenOrOdd => {
  if (evenOrOdd % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(mapArray);