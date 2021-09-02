const range = (startNum, finishNum) => {
  let array = [];
  if (startNum < finishNum) {
    for (startNum; startNum <= finishNum; startNum++) {
      array.push(startNum);
    }
    return array;
  }

  for (finishNum; finishNum <= startNum; finishNum++) {
    array.push(finishNum);
  }
  return array.reverse();
};

console.log(range(1, 10));
console.log(range(54, 50));
console.log(range(1));
console.log(range());
