let objToCopy = {
  foo: 1,
  bar: 2,
};

let copyObj = function(objToCopy, keysArray) {
  let tempObj = {};
  if (keysArray) {
    keysArray.forEach(key => tempObj[key] = objToCopy[key]);
  } else {
  tempObj = Object.assign(tempObj, objToCopy);
  };
  return tempObj;
};

console.log(copyObj(objToCopy, ['foo']).foo)

console.log(copyObj(objToCopy, ['foo']).bar)


console.log(copyObj(objToCopy));
