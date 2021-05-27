/*Conceitos básicos de array*/
let num = [5, 8, 2, 9 ,3]

/*Adicionando novo mais um número*/
num[1]=0.5

/*Adicionando novo mais um número no final sem especificar o final*/
num.push(1)

/*Para descobrir a quantidade de elementos dentro da variável array*/
console.log(`Quantidade de elementos na variável: ${num.length}.`)

/*Para colocar os elementos dentro do array em ordem crescente*/
num.sort()

console.log(`Nosso vetor é o ${num}`)

const numt = num.length

/*Escrevendo separadamente todos os elementos do array*/
for(var n = 0; n < numt; n++) {
    console.log(`Elemento na posição ${n} do array: ${num[n]}`)
}

/*Escrevendo separadamente todos os elementos do array de outra forma*/
for(let n in num) {
    console.log(`Elemento na posição ${n} do array: ${num[n]}`)
}

/*Para encontrar a chave do array que contém um determinado valor*/
let esc = num.indexOf(9)
if (esc == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${esc}`)
}

