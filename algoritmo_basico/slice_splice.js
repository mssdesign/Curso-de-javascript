function frankenSplice(arr1, arr2, n) {
    var arr = arr2.slice()
    for (let i = 0; i < arr1.length; i++) {
        arr.splice(n + i, 0, arr1[i])
    }
    console.log(arr2)
    return arr
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));