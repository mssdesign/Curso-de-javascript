function palindrome(str) {

    let regex = /[A-Za-z0-9]/ig

    let string = str.toLowerCase().match(regex).reverse().join('');

    if (string == str.toLowerCase().match(regex).join('')) {
        return `true ${string} e ${str.match(regex).join('')}`;
    } else {
        return `false ${string} e ${str.match(regex).join('')}`;
    }
}

console.log(palindrome("_eye"));































// function palindrome(str) {

//     let regex = /[a-z]/ig

//     let string = str.toLowerCase().match(regex).reverse().join('');

//     if (string == str.toLowerCase().match(regex).join('')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindrome("A man, a plan, a canal. Panama"));

// `false ${string} e ${str.match(regex).join('')}`