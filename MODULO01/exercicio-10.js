let prompt = require('prompt-sync')();

const numeroInserido = prompt('Digite um número inteiro: ');
const numero = Number(numeroInserido);

if(!Number.isInteger(numero)){
    console.log('Erro! Por favor, digite um número inteiro.')
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}: ${numero}`);
    }
}
