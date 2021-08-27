function myReplace(str, before, after) {

    let cases = before.charAt(0);
    let regex = /[A-Z]/

    if (regex.test(cases)) {
        return str.replace(before, after.replace(after.charAt(0), after.charAt(0).toUpperCase()));
    } else {
        return str.replace(before, after.replace(after.charAt(0), after.charAt(0).toLowerCase()));
    }
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));



// function myReplace(str, before, after) {

//     let cases = before.charAt(0);
//     let regex = /[A-Z]/

//     function upCaseReplace(match, offset, string) {  //before com letra maíuscula
//         return after.replace(after.charAt(0), after.charAt(0).toUpperCase())
//     }

//     function lowCaseReplace(match, offset, string) {  //before com letra minúscula
//         return after.replace(after.charAt(0), after.charAt(0).toLowerCase())
//     }

//     if (regex.test(cases)) {
//         return str.replace(before, upCaseReplace);
//     } else {
//         return str.replace(before, lowCaseReplace);
//     }
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));