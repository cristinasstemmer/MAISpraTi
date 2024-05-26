const prompt = require('prompt-sync')();

function lerMatriz() {
  const tamanho = parseInt(prompt('Informe o tamanho da matriz (n x n): '), 10);
  const matriz = [];

  for (let i = 0; i < tamanho; i++) {
    const linha = [];
    for (let j = 0; j < tamanho; j++) {
      const valor = parseFloat(prompt(`Informe o valor para a posição [${i}][${j}]: `));
      linha.push(valor);
    }
    matriz.push(linha);
  }

  return matriz;
}

function somaAcimaAbaixoDiagonal(matriz) {
  let somaAcima = 0;
  let somaAbaixo = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i < j) {
        somaAcima += matriz[i][j];
      } else if (i > j) {
        somaAbaixo += matriz[i][j];
      }
    }
  }

  return { somaAcima, somaAbaixo };
}

const matriz = lerMatriz();
const { somaAcima, somaAbaixo } = somaAcimaAbaixoDiagonal(matriz);

console.log(`Soma dos elementos acima da diagonal principal: ${somaAcima}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);
