const tempo = document.querySelector(".img");
const texto = document.querySelector(".texto");
var d = new Date()
var h = d.getHours();
var m = d.getMinutes();

mostrarHora()

function mostrarHora() {
    if (h > 5 && h < 12){
        comprimento = "Bom dia!";
        tempo.classList.add("dia");
    } else if (h >= 12 && h <= 18){
        comprimento = "Boa tarde!";
        tempo.classList.add("tarde");
    } else {
        comprimento = "Boa noite!";
        tempo.classList.add("noite");
    }
    texto.innerHTML = (`São ${h} horas e ${m} minutos. ${comprimento}`);
}


