function convertHTML(str) {

    let regex = /[&<>"']/g
    let chart = [...str.matchAll(regex)];
    let res = str.slice();
    
    let object = {
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        "'":'&apos;'
    }

    for (var i = 0; i < chart.length; i++) {
        res = res.slice().replace(chart[i][0], object[chart[i][0]]);
    }

    return res;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));





















// function convertHTML(str) {

//     let regex = /[&<>"']/
//     let chart = str.match(regex);

//     function replaceHTML(nstr) {
//         let object = {
//             '&':'&amp;',
//             '<':'&lt;',
//             '>':'&gt;',
//             '"':'&quot;',
//             "'":'&apos;'
//         }
    
//         return nstr.replace(chart[0], object[chart[0]]);
//     };

//     return replaceHTML(str);

// }

// console.log(convertHTML("Hamburgers < Pizza < Tacos"));