const tabuada = document.querySelector('.tabuada')
const number = document.getElementById('number')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {    
    var number_n = Number(number.value)

    tabuada.innerHTML =`A tabuada de ${number_n} é:<br><br>`;
    
    for(let i = 0; i <= 10; i++) {
        var res = i*(number_n)        
        tabuada.innerHTML +=`${number_n} x ${i} = ${res}<br><br>`;
        btn.disabled = true;
        btn.style = 'cursor: not-allowed';
    }       
})
