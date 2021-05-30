const rock = document.querySelector('.rock'); 

function eu() {
    alert('Olá, eu sou irock');
    alert('Clique em mim para conversarmos');    
    setInterval(sad, 10000);
}


function askname() {
    var usrName = prompt('Qual é o seu nome?',);

    if (usrName) {
        alert('Prazer em conhecer você,' + usrName + '!');
        rock.classList.remove('sad')
        rock.classList.add('active')
    }    
}

function sad() {
    rock.classList.remove('active')
    rock.classList.add('sad')
    window.alert('Onde está você?')
}



 
    
