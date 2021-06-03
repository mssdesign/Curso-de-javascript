mostrarHora()

function mostrarHora() {
    const tempo = document.querySelector(".img");
    const texto = document.querySelector(".texto");
    
    var d = new Date()
    var h = d.getHours();
    var m = d.getMinutes();
    
    if (h > 0 && h < 12){
        comprimento = "Bom dia!";
        tempo.classList.add("dia");
        document.body.style.background = "#F9C33B";
    } else if (h >= 12 && h <= 18){
        comprimento = "Boa tarde!";
        tempo.classList.add("tarde");
        document.body.style.background = "#6B7325";
    } else {
        comprimento = "Boa noite!";
        tempo.classList.add("noite");
        document.body.style.background = "#1E3E59";
    }

    texto.innerHTML = (`São ${h} horas e ${m} minutos. ${comprimento}`);
}



