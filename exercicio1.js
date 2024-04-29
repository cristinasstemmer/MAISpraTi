let prompt = require('prompt-sync')();

const celsius = prompt('Digite a temperatura em Celsius a ser convertida: ');

const celsiusFloat = parseFloat(celsius);

const fahrenheit = (celsiusFloat * 9/5) + 32;

const fahrenheitArredondado = Math.round(fahrenheit)

console.log(`A temperatura em Fahrenheit é: ${fahrenheitArredondado} °F`);
