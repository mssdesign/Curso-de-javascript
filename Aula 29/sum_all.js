function sumAll(arr) {
    let newArr = arr.sort(function (a, b) {
        return a - b;
    })

    for (var i = 0, numbers = []; i <= newArr[1] - newArr[0]; i++) {
        numbers.push(newArr[0]+i);
    }

    return numbers.reduce((a, b) => {
        return a + b;
    });
  }
  
  console.log(sumAll([1, 4]));