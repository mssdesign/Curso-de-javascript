function addTogether(a, b) {


    if (arguments.length > 1 || typeof(a) === 'string') {
        if (typeof(a) !== 'number' || typeof(b) !== 'number') {
            return undefined;
        } else {
            return arguments[0] + arguments[1];
        }
        
    } else {
        return function(x) {
            if (typeof(x) === 'number' && typeof(a) === 'number') {
                return a + x;
            } else {
                return undefined;
            }            
        }
    }
}

console.log(addTogether("http://bit.ly/IqT6zt"));






























// function addTogether(a, b) {

//     if(arguments.length > 1) {
//         return arguments[0] + arguments[1];
//     } else {
//         return function(x) {
//             return a + x;
//         }
//     }

// }

// console.log(addTogether(5, 7));















// function addTogether(a, b) {


//     if (arguments.length > 1) {
//         if (typeof(a) !== 'number' || typeof(b) !== 'number') {
//             return undefined;
//         } else {
//             return arguments[0] + arguments[1];
//         }
        
//     } else {
//         return function(x) {
//             if (typeof(x) === 'number' && typeof(a) === 'number') {
//                 return a + x;
//             } else {
//                 return undefined;
//             }            
//         }
//     }
// }

// console.log(addTogether(23, 30));