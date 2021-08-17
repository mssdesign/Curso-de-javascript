function largestOfFour(arr) {
    let biggest = []
    for(let i = 0; i < arr.length; i++) {
      biggest.push(Math.max.apply(Math, arr[i]))
    }
    return biggest;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
  