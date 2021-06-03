const ano = document.querySelector('.ano')
var idade = document.querySelector('.anos')
var d = new Date()
var y  = d.getFullYear()

function nascimento() {
    var anos = parseInt(ano.value)
    if (isNaN(anos)) {
        alert("Digite seu ano de nascimento!")
        window.location.reload()
    } else if (anos > y){
        alert("Você veio do futuro? Digite seu ano de nascimento real!")
        window.location.reload()
    } else if (anos < y - 150) {
        alert("Digite seu ano de nascimento!")
        window.location.reload()
    } else {
        var show = (y - anos)
        idade.innerHTML = show
    }              
}



