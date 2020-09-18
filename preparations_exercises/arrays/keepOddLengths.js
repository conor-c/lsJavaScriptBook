function oddLengths(array) {
  let lengthsConvert = array.map(value => {
    return value.length;
  });

  let onlyOdds = lengthsConvert.filter(value => value % 2 !== 0);
  return onlyOdds;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

//could of used method chaining and less variable declarations. I also took advantage of
//arrow function implicit return which may be less readable.