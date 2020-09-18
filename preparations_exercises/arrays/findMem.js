let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
let foundMem = arr.map(subArray => subArray.filter(memCheck => memCheck === 'mem'));
console.log(foundMem);

//answer was arr[1][2];
//I clearly overthought this problem.