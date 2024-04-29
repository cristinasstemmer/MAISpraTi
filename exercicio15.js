/* Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */

let prompt = require('prompt-sync')();

let somaPesos = 0;
let mediaFinal = 0;

while (true) {
    let numeroDecimal = parseFloat(prompt('Insira um número decimal: '));
    
    if(numeroDecimal === 0) {
        break;
    }

    let pesoNumero = parseFloat(prompt('Insira o peso desse número: '));

    if (pesoNumero === 0) {
        break;
    }

    somaPesos += pesoNumero;
    mediaFinal += numeroDecimal * pesoNumero;

}

mediaFinal = mediaFinal / somaPesos;

console.log(`A média ponderada dos números é: ${mediaFinal}`);

