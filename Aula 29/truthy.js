function truthCheck(collection, pre) {

    return collection.every(object => {
        if (Boolean(object[pre]) === true) {
            return true
        }
        return false;
    })

}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));





















// function truthCheck(collection, pre) {

//     return collection.every(object => {
//         if (object[pre] === true) {
//             return true
//         }
//         return false;
//     })

// }

// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));