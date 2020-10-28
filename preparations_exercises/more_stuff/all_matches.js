//Write a function that searches an array of strings for every element that matches the regular expression given by its argument. 
//The function should return all matching elements in an array.


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];
function allMatches(words, regex) {
  let matched = [];
  words.forEach(string => {
    if (regex.test(string)) {
      matched.push(string);
    }
  })
  return matched;
};


console.log(allMatches(words, /lab/));