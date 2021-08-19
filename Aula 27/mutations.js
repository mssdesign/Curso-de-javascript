function mutation(arr) {
    let num1 = arr[0].toUpperCase().split('')
    let num2 = arr[1].toUpperCase().split('')
    num1.sort()
    num2.sort()

    let res = num2.every(n => num1.includes(n))
    return res
  }
  
  console.log(mutation(["hellO", "hello"]));

//   function mutation(arr) {
//     let num1 = arr[0].split('')
//     let num2 = arr[1].split('')
//     num1.sort().join()
//     num2.sort().join()

//     let res = num2.every(n => num1.includes(n))
//     return res
//   }
  
//   console.log(mutation(["hello", "hello"]));