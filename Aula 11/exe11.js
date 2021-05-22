// ESTRUTURA SWITCH EM JAVASCRIPT TRANSFORMANDO O NÚMERO DO DIA DA SEMANA EM TEXTO ESCRITO

var agora = new Date()
var diaSem = agora.getUTCDay()

switch(diaSem) {
    case 0:
        console.log('Domingo')
    break

    case 1:
        console.log('Segunda')    
    break

    case 2: 
        console.log('Terça')
    break

    case 3: 
        console.log('Quarta')
    break

    case 4: 
        console.log('Quinta')
    break

    case 5: 
        console.log('Sexta')
    break

    case 6: 
        console.log('Sábado')
    break

    default:
        console.log('Você é um imbecil')
    break
}

// SEMPRE UTILIZE "BREAK" PARA FINALIZAR A EXPRESSÃO QUANDO UM VALOR PRÉ-DEFINIDO
// FOR SATISFEITO