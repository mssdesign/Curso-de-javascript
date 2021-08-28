function sumPrimes(num) {

    let numbers = [];

    for (let i = 2; i <= num; i++) {
        numbers.push(i);
    };

    return numbers.filter(function(n, index) {
        for (var j = 0; j < index; j++) {
            if (n%numbers[j] === 0) {
                return false;
            } 
        }
        return true;

    }).reduce((a, b) => {
        return a + b;
    });
}

console.log(sumPrimes(977));