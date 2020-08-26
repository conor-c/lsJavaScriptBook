let array = [3, 1, 4, 9, 2, 6, 4, 7];
let indexOfFive = 'no five';
for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);