let prompt = require('prompt-sync')();

let numeroDecimal = 1;
let mediaAritmetica = 0;
let contadorDeValores = 0;

while (numeroDecimal !== 0 && !isNaN(numeroDecimal)){
    numeroDecimal = parseFloat(prompt('Digite um valor decimal: '));
    if(numeroDecimal !==0 && !isNaN(numeroDecimal)){
    mediaAritmetica += numeroDecimal;
    contadorDeValores++
    }
}

mediaAritmetica = mediaAritmetica / contadorDeValores;

console.log(`A média aritmética dos valores é: ${mediaAritmetica}`)