function convertToRoman(num) {

    let romans = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1}

    let letter = '';

    let i;

    for (i in romans) {
        while (num >= romans[i]) {
            letter += i;
            num -= romans[i];
        }
    }

    return letter;
}

console.log(convertToRoman(3999));







































// function convertToRoman(num) {
//     var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;

//     for (i in lookup) {
//         while (num >= lookup[i]) {
//             roman += i;
//             num -= lookup[i];
//         }
//     }
//     return roman;
// }

// console.log(convertToRoman(16));