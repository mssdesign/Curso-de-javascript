function truncateString(str, num) {
    var dividir = str.split('');
    for (var i = 0, string = []; i < num; i++) {
        string.push(dividir[i])
    }
    if (num < dividir.length) {
        return `${string.join('')}...`
    } else {
        return string.join('')
    }    
}
  
console.log(truncateString("A-tiske", 8));