let evenOrOdd = (number) => {
  if (!Number.isInteger(number)) {
    console.log('Not a Valid Number');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(20);
evenOrOdd(19);
evenOrOdd('blue');
evenOrOdd(2.2);
evenOrOdd(true);
evenOrOdd(false);