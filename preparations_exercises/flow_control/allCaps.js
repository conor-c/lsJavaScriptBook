let allCaps = (string) => {
  if (string.length <= 10) {
    return string;
  } else {
    return string.toUpperCase();
  }
}

console.log(allCaps('blue'));
console.log(allCaps('la la la la la na la 123'));