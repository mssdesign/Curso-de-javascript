function smallestCommons(arr) {

    arr.sort((a, b) => {return a - b;}); //Ordenar números
    let newArr = [];
    let res = 0;

    for (var i = arr[0]; i <= arr[1]; i++) { //Gerar array com os números entre os valores do array
        newArr.push(i);
    }
    
    for (var i = 2; i >= 0;) { //Gerar números para o teste
        
        if (newArr.every(n => {if(i%n === 0) {return true;}})) { //Teste de MMC "se o número dividir todos os elementos do newArray então a variável res recebe o valor e i recebe -1 parando o loop"

            res = i;            
            i = -1;

        } else {

            i++

        }
    }

    return res;

}
  
console.log(smallestCommons([23,18]));