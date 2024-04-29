let prompt = require('prompt-sync')();

const eleitores = prompt('Digite o número total de eleitores do município em questão: ');
const brancos = prompt('Agora, digite o número de votos brancos: ');
const nulos = prompt('E o número de votos nulos: ');
const validos = prompt('Por fim, digite o número de votos válidos: ');

let percentualBrancos = ((brancos / eleitores) * 100);
let percentualNulos = ((nulos / eleitores) * 100);
let percentualValidos = ((validos / eleitores) * 100);

console.log(`\nO percentual de votos brancos é: ${percentualBrancos}%.
O percentual de votos nulos é: ${percentualNulos}%.
O percentual de votos válidos é: ${percentualValidos}%.`);
