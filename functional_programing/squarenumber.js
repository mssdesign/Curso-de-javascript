const squareList = arr => {
  // Only change code below this line
  let newArr = [];
  arr.map(number => {
    if (Number.isInteger(number) && number > 0) {
      newArr.push(Math.pow(number, 2))
    }
  })
  return newArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers);