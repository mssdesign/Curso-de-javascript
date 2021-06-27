const number = document.getElementById('number');
const analisar = document.getElementById('analisar');
const select = document.getElementById('select');
const console = document.getElementById('console');
const list = document.getElementById('list');
const mais = document.getElementById('mais');
const reload = document.getElementById('reload');
var array = [];

mais.addEventListener('click', () => {
    var num = Number(number.value);

    //validação de número
    if (num < 1 || num > 100) {
        alert('Digite um número entre 1 e 100')
        return
    } else if (array.indexOf(num) != -1) {
        alert('Digite outro valor!')
        return
    } else {        
        var n = num
    }

    array.push(n); //enviando número para array

    select.innerHTML += `<option> Valor ${n} adicionado.</option>`;

    buttonEnable()

    number.value = ' ' //Para limpar a caixa de texto

    number.focus() //Para fazer a caixa de texto ativar
})

analisar.addEventListener('click', () => {
    buttonDisabled()

    var qnt = Number(array.length)

    var som = array.reduce((a, b) => a + b);

    var med = som/qnt;

    var high = Math.max.apply(Math, array);

    var less = Math.min.apply(Math, array);

    list.innerHTML += `<br><li>Ao todo, temos ${array.length} números cadastrados.</li>`;

    list.innerHTML += `<br><li>Somando todos os valores temos: ${som}.</li>`;

    list.innerHTML += `<br><li>A média dos valores digitados é: ${med}.</li>`;

    list.innerHTML += `<br><li>O maior valor digitado foi: ${high}.</li>`;

    list.innerHTML += `<br><li>O menor valor digitado foi: ${less}.</li>`;

    mais.disabled = true;
    mais.style = 'background-color: #cecece; cursor: not-allowed;';

    reload.classList.add('on');
    reload.innerHTML += 'Tente novamente';
})

function buttonDisabled() {
    analisar.disabled = true;
    analisar.style = 'background-color: #cecece; cursor: not-allowed;';
}

function buttonEnable() {
    analisar.disabled = false;
    analisar.style = 'background-color: #4682B4; cursor: pointer;';
}