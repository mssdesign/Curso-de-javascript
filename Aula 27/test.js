function confirmEnding(str, target) {
    let arr = str.split("")
    for (var i = arr.length - 1, j = 1, total = []; j <= target.length; i--,j++) {
        total.unshift(arr[i])
    }
    if (total.join('') == target) {
        return true
    } else {
        return false        
    }
}
  
console.log(confirmEnding("congratulation", "ion"));

//return str.indexOf(target) > -1 ? true : false;

//   function confirmEnding(str, target) {
//     var tamanho = str.length - target.length
//     if (str.indexOf(target) == tamanho) {
//         return true
//     } else {
//         return false
//     }
//   }