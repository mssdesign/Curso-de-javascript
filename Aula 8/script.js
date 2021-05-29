const rock = document.querySelector('.rock'); 

function eu() {
    alert('Olá, eu sou irock');
    alert('Clique em mim para conversarmos');
    setTimeout("alert('Wake up!');", 6000);
}

function askname() {
    var usrName = prompt('Qual é o seu nome?',);

    if (usrName) {
        alert('Prazer em conhecer você,' + usrName + '!');
        rock.classList.add('active')
    }    
}



 
    
