let prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt('Digite um valor: '));
const valor2 = parseFloat(prompt('Digite um segundo valor: '));
const valor3 = parseFloat(prompt('Digite um terceiro valor: '));

if (valor1 < (valor2 + valor3) && valor2 < (valor1 + valor3) && valor3 < (valor1 + valor2)) {
    if (valor1 === valor2 && valor2 === valor3) {
        console.log('Os valores fornecidos podem formar um triângulo Equilátero.');
    } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        console.log('Os valores fornecidos podem formar um triângulo Isósceles.');
    } else {
        console.log('Os valores fornecidos podem formar um triângulo Escaleno.');
    }
} else {
    console.log('Não é possível formar um triângulo com os valores informados.')
}
