let prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt('Digite um valor: '));
let valor2 = parseFloat(prompt('Digite um segundo valor diferente do primeiro: '));

if (valor1 === valor2){
    console.log(`Erro. Os valores inseridos são iguais.`)
} else if (valor1 > valor2){
    console.log(`A ordem crescente dos números inseridos é: ${valor2}, ${valor1} `)
} else if (valor2 > valor1) {
    console.log(`A ordem crescente dos números inseridos é: ${valor1}, ${valor2} `)
}
