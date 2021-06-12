const number = document.getElementById('number');
const analisar = document.getElementById('analisar');
const select = document.getElementById('select');
const console = document.getElementById('console');
const list = document.getElementById('list');
const mais = document.getElementById('mais');
var array = [];

mais.addEventListener('click', () => {
    var i = Number(0)
    var i = i++
    var n = Number(number.value)
    array.push(n)
    select.innerHTML += `<option> Valor ${n} adicionado.</option>`
})

analisar.addEventListener('click', () => {
    var max = Math.max(null, array)
    var som = array[1] + array[0]

    list.innerHTML += `<br><li>Ao todo, temos ${array.length} números cadastrados.</li>`;
    list.innerHTML += `<br><li>${som}</li>`;
})