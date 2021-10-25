function destroyer(arr) {
    let newArr = arr;
    
    for (var j = 0; j < arguments.length; j++) {
        for (var i = 0; i < newArr.length; i++) {
            if(newArr[i] === arguments[j]) {
                newArr.splice(i, 1)
                i = -1;
            }
        }
    }    

    return newArr;
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));















// function destroyer(arr) {
//     let newArr = arr.sort();
    
//     for (var j = 0; j < arguments.length; j++) {
//         for (var i = 0; i < newArr.length; i++) {
//             if(newArr[i] === arguments[j]) {
//                 newArr.splice(i, 2)
//             }
//         }
//     }    

//     return newArr;
// }
