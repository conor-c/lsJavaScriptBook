let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let oddLengths = function(oldArray) {
  return oldArray.reduce((oddArray, element) => {
    if (element.length % 2 !== 0) {
      oddArray.push(element.length);
    }
    return oddArray;
  }, []);
};

console.log(oddLengths(arr));