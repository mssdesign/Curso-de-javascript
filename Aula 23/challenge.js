var total = []
function rangeOfNumbers(startNum, endNum) {

    if (startNum <= endNum) {
        var arr;
        arr = startNum
        rangeOfNumbers(startNum + 1, endNum)
    } else {
        return;
    }
    
    total.unshift(arr)
    return total
  };

  console.log(rangeOfNumbers(4,4))