function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2)

    newArr.sort(function (a, b) {
        return a - b;
    });

    newArr.sort();

    function findDuplicate() {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === newArr[i+1]) {
                newArr.splice(i, 2)
                findDuplicate()
            }
        }
    }
    findDuplicate()

    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));