function steamrollArray(arr) {

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(...steamrollArray(arr[i]))
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}   

console.log(steamrollArray([1, {}, [3, [[4]]]]));











// function steamrollArray(arr) {

//     let regex_num = /[0-9]/g
//     let regex_letra = /[a-z]/ig
//     let res;

//     if (regex_num.test(arr)) {
//         res = regex_num.exec(arr);
//         return res["input"].split(',').map(n => {if (n > 0) {return Number(n);}}).filter(Number);

//     } else if (regex_letra.test(arr)) {
//         res = regex_letra.exec(arr);
//         return res["input"].split(',');
//     }

// }

// console.log(steamrollArray([1, {}, [3, [[4]]]]));