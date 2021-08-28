function sumFibs(num) {
    
    let newArr = [];

    //Gera uma sequência de Fibonacci
    let arr = new Array(num + 1).fill(1).reduce((arr, _, i) => {
        arr.push((i <= 1) ? i : arr[i - 2] + arr[i - 1])
        return arr;
    }, []);

    //Remove o zero do início
    arr.shift();

    //Filtra elementos
    arr.map(element => {
        if (element%2 !== 0 && element <= num) {
            newArr.push(element);
        }
    })

    //Soma tudo
    let res = newArr.reduce((a, b) => {
        return a + b;
    })

    return res;
}

console.log(sumFibs(4));


















// function sumFibs(num) {

//     for (let i = 1, j = 1, k = 1, l; i <= num; i++) {
//         console.log(j)
//         l = j + k
//         console.log(k)
//         j = l + k
//         console.log(l)
//         k = l + j 
//     }

// }

// console.log(sumFibs(4));







// function sumFibs(num) {

//     let newArr = [];

//     for (var i = [], j = 1, k = 1, l; i.length < num;) {

//         if (i.length <= num - 1) {
//             i.push(j)
//             l = j + k
//         }

//         if (i.length <= num - 1) {
//            i.push(k)
//             j = l + k
//         }

//         if (i.length <= num - 1) {
//             i.push(l)
//             k = l + j 
//         }

//     }

//     i.map(element => {
//         if (element % 2 !== 0) {
//             newArr.push(element);
//         }
//     });

//     return newArr.reduce((a, b) => {
//         return a + b;
//     });
// }

// console.log(sumFibs(10));







// function sumFibs(num) {
    
//     let newArr = [];

//     //Gera uma sequência de Fibonacci
//     let arr = new Array(num).fill(1).reduce((arr, _, i) => {
//         arr.push((i <= 1) ? i : arr[i - 2] + arr[i - 1])
//         return arr;
//     }, []);

//     //Filtra elementos
//     arr.map(element => {
//         if (element%2 !== 0 && element <= num) {
//             newArr.push(element);
//         }
//     })

//     //Soma tudo
//     let res = newArr.reduce((a, b) => {
//         return a + b;
//     })

//     return res;
// }

// console.log(sumFibs(1));