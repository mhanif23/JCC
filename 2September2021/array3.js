const sum = (startNum, finishNum, range) => {
  if (range === undefined) range = 1;
  if (finishNum === undefined) return startNum;
  let array = [];
  const reducer = (accumulator, curr) => accumulator + curr;
  if (startNum <= finishNum) {
    for (startNum; startNum <= finishNum; startNum++) {
      if (startNum === array[array.length - 1] + range && array.length >= 1)
        array.push(startNum);
      if (array.length < 1) array.push(startNum);
    }
    return array.reduce(reducer);
  }

  for (finishNum; finishNum <= startNum; finishNum++) {
    if (finishNum === array[array.length - 1] + range && array.length >= 1)
      array.push(finishNum);
    if (array.length < 1) array.push(finishNum);
  }
  newArray = [];
  for (j = array.length - 1; j >= 0; j--) {
    newArray.push(array[j]);
  }

  return newArray.reduce(reducer);
};

console.log(sum(1, 10));
console.log(sum(5, 50, 2));
console.log(sum(1));
