const inicio = document.getElementById('inicio');
const fim = document.getElementById('fim');
const passo = document.getElementById('passo');
const contar = document.getElementById('contar');
const console = document.getElementById('console');

contar.addEventListener('click', () => {
    var n_inicio = Number(inicio.value)
    var n_fim = Number(fim.value)
    var n_passo = Number(passo.value)
    var res = Number(n_inicio)

    console.innerText = `Contando: `

    if (n_inicio < n_fim) {
        somar()
    } else if (n_inicio > n_fim) {
        diminuir()
    } else if (n_passo = 0) {
        console.innerText = `Digite um passo diferente de 0`
    }

    function somar() {
        if (res < n_fim) {
            console.innerText += ` ${res} `
            res = (res + n_passo)                       
            somar()
        }       
    }

    function diminuir() {
        if (res > n_fim) {
            console.innerText += ` ${res} `
            res = (res - n_passo)            
            diminuir()
        }         
    }
})



// function somar() {
//     if(res < n_fim) {
//         console.innerText = `Contando: `;
//         console.innerText += res;
//         res = (res + n_passo);
//         console.innerText += `👉${res}👉`;            
//         somar();
//     } else if (res > n_fim) {
//         console.innerText = `Contando: `;
//         console.innerText += res;
//         res = (res - n_passo);
//         console.innerText += `👉${res}👉`;            
//         somar();
//     }        
// }








