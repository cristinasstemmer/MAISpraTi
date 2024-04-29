let prompt = require('prompt-sync')();

while (true) {
    let numero = Number(prompt('Digite um número inteiro: '));
    
    if (isNaN(numero) === true || numero <= 0) {
        console.log("Valor nulo, negativo ou inválido detectado. Encerrando o programa.");
        break;
    }
    if (!Number.isInteger(numero)) {
        console.log("Valor não inteiro detectado. Digite outro valor.");
        continue;
    }
    
if (numero % 2 === 0) {
    console.log(`${numero} é PAR`);
} else {
    console.log(`${numero} é ÍMPAR`);
}
}
