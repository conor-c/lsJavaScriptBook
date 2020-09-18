let numbers = [3, 5, 7];
let sumOfSquares = numbers.reduce(function(sum, value) {
  return sum + value * value;
}, 0);
console.log(sumOfSquares);