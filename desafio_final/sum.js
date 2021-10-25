var soma = 0;
function sum(arr, n) {

// Only change code below this line
    if(n <= 0) {
        console.log(soma);
    } else {
        soma += arr[n-1]
        sum(arr, n-1) //<- recursividade (chamar a função denovo com outro parâmetro)
    }
// Only change code above this line
}

sum([2, 3, 4, 5], 3)