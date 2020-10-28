function objectIs(valueZero) {
  if ((1 / valueZero) === Number.NEGATIVE_INFINITY) {
    return true;
  }
  return false;
}

console.log(objectIs(-0));
console.log(objectIs(0));
console.log(objectIs(1));
console.log(objectIs());

//After viewing the solution, I need to be less verbose when only needing small amounts of logic to return true/false