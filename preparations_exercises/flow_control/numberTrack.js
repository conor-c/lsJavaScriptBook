let numberTrack = (number) => {
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number > 50 && number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100`);
  } else {
    console.log(`${number} is less than 0`);
  }
}

// Should of organized conditionals more logically/in order


numberTrack(40);
numberTrack(51);
numberTrack(101);
numberTrack(-20);