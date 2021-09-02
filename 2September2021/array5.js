const balikkata = (input) => {
  newArray = '';
  for (i = input.length - 1; i >= 0; i--) {
    if (input[i] === ',') {
      newArray += ' ';
    } else {
      newArray += input[i];
    }
  }
  return newArray;
};

console.log(balikkata('SanberCode'));
console.log(balikkata('racecar'));
console.log(balikkata('kasur,rusak'));
console.log(balikkata('haji,ijah'));
console.log(balikkata('I,am,Sanbers'));
