var globalArray = [5, 60, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  
  return arr.slice().sort(function (a, b) {
    return a - b;
  })

  // Only change code above this line
}
console.log(nonMutatingSort(globalArray))
console.log(globalArray);