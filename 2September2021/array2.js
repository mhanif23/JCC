const range = (startNum, finishNum, range) => {
  let array = [];
  if (startNum <= finishNum) {
    for (startNum; startNum <= finishNum; startNum++) {
      if (startNum === array[array.length - 1] + range && array.length >= 1)
        array.push(startNum);
      if (array.length < 1) array.push(startNum);
    }
    return array;
  }

  for (finishNum; finishNum <= startNum; finishNum++) {
    if (finishNum === array[array.length - 1] + range && array.length >= 1)
      array.push(finishNum);
    if (array.length < 1) array.push(finishNum);
  }
  return array.reverse();
};

console.log(range(1, 10, 2));
console.log(range(5, 2, 1));
