let numero1 = document.getElementById('primeiro-numero');
let numero2 = document.getElementById('segundo-numero');


function soma() {
    document.getElementById('resultado').innerHTML = `O resultado disso foi: ${(parseInt(numero1.value) + parseInt(numero2.value))}!`;
}

function subtracao() {
    document.getElementById('resultado').innerHTML = `O resultado disso foi: ${(parseInt(numero1.value) - parseInt(numero2.value))}!`;
}

function multiplicacao() {
    document.getElementById('resultado').innerHTML = `O resultado disso foi: ${(parseInt(numero1.value) * parseInt(numero2.value))}!`;
}

function divisao() {
    document.getElementById('resultado').innerHTML = `O resultado disso foi: ${(parseInt(numero1.value) / parseInt(numero2.value))}!`;
}