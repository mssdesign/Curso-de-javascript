const rock = document.querySelector('.rock'); 

function eu() {
    alert('Olá, eu sou irock');
    alert('Clique em mim para conversarmos');
}

function askname() {
    rock.classList.add('active') 

    var usrName = prompt('Qual é o seu nome?',);
       
    window.alert('Bem vindo, ' + usrName + '!');        
}

 
    
