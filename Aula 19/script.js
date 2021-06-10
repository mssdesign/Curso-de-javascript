const inicio = document.getElementById('inicio')
const fim = document.getElementById('fim')
const passo = document.getElementById('passo')
const contar = document.getElementById('contar')
const console = document.getElementById('console')
const tentar = document.querySelector('.tentar_n')

contar.addEventListener('click', () => {
    var n_inicio = Number(inicio.value)
    var n_fim = Number(fim.value)
    var n_passo = Number(passo.value)
    var res = Number(n_inicio)

    console.innerText = `Contando: `
    
    if (n_inicio < n_fim && n_passo > 0) {
        somar()
    } else if (n_inicio > n_fim && n_passo != 0) {
        diminuir()
    } else if (n_inicio == n_fim && n_passo != 0) {
        alert('Defina um fim maior ou menor que o início!');
        console.innerText = ` Não foi possível contar :/`;
        tentar.style = "background-color: #FF0000";       
    } else if (n_passo == 0) {
        alert('Defina um passo maior que zero!');
        console.innerText = ` Não foi possível contar :/`;
        tentar.style = "background-color: #FF0000";
    }

    function somar() {
        if (res < n_fim) {
            console.innerText += ` ${res} 👉`
            res = (res + n_passo)                       
            somar()
        } else {
            console.innerText += `🏆`
        }        
    }

    function diminuir() {
        if (res > n_fim) {
            console.innerText += ` ${res} 👉`
            res = (res - n_passo)            
            diminuir()
        } else {
            console.innerText += `🏆`
        }        
    }
})

function denovo() {
    window.location.reload()
}