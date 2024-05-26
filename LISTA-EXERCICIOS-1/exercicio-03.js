let prompt = require('prompt-sync')();

const num1 = prompt('Digite um número inteiro: ');
const num2 = prompt('Digite um segundo número inteiro: ');
const num3 = prompt('Digite um terceiro número inteiro: ');

let soma1 = parseInt(num1) + 25;
let triplo2 = num2 * 3;
let dozePC3 = num3 * 0.12;
let num4 = num1 + num2 + num3;

console.log(`\nO primeiro número acrescido de 25 é: ${soma1}
O segundo número triplicado é: ${triplo2}
O terceiro número modificado para 12% do seu valor original é: ${dozePC3}
O quarto número, resultado da soma dos três primeiros valores originais é: ${num4}`)
