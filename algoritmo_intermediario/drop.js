function dropElements(arr, func) {

    if(arr.every(n => func(n) === false)) {
        return [];
    }

    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            i = arr.length + 1;
        }

        if(func(arr[0]) === false) {
            arr.shift()
        }
    }

    if(func(arr[0])) {
        return arr;
    } else {
        arr.shift()
        return arr;
    }
}

console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));


















// function dropElements(arr, func) {

//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if(func(arr[i])) {
//             newArr.push(arr[i])
//         } else {
//             arr.shift();
//         }
//     }
//     return newArr;
// }

// console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));







// function dropElements(arr, func) {

//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if(func(arr[i])) {
//             i = arr.length + 1;
//         }
//         arr.shift()
//     }

//     if(func(arr[0])) {
//         return arr;
//     } else {
//         arr.shift()
//         return arr;
//     }
// }

// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));