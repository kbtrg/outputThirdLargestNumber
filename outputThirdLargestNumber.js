const outputThirdLargestNumber = (numArray) => {
  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  let third = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] >= first) {
      third = second;
      second = first;
      first = numArray[i];
    } else if (numArray[i] >= second && numArray[i] <= first) {
      third = second;
      second = numArray[i];
    } else if (numArray[i] >= third && numArray[i] <= second) {
      third = numArray[i];
    }
  }

  return third;
}

const result1 = outputThirdLargestNumber([1, 3, 5, 7, 9]);
console.log(result1);
const result2 = outputThirdLargestNumber([8, 6, 4, 2, 0]);
console.log(result2);
const result3 = outputThirdLargestNumber([1, -3, 5, -7, 9]);
console.log(result3);
const result4 = outputThirdLargestNumber([1, 10, 1, 10, 1]);
console.log(result4);
const result5 = outputThirdLargestNumber([1, 1, 1, 1, 1]);
console.log(result5);