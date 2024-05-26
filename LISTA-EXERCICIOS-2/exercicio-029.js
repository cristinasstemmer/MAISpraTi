const prompt = require('prompt-sync')();

function lerMatriz(tamanho) {
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

function somasMatriz(matriz) {
  let somaLinha4 = 0;
  let somaColuna2 = 0;
  let somaDiagonalPrincipal = 0;
  let somaTodosElementos = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i === 3) {
        somaLinha4 += matriz[i][j];
      }
      if (j === 1) {
        somaColuna2 += matriz[i][j];
      }
      if (i === j) {
        somaDiagonalPrincipal += matriz[i][j];
      }
      somaTodosElementos += matriz[i][j];
    }
  }

  return { somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTodosElementos };
}

const tamanho = parseInt(prompt('Informe o tamanho da matriz (n x n): '), 10);
const matriz = lerMatriz(tamanho);
const { somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTodosElementos } = somasMatriz(matriz);

console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma de todos os elementos: ${somaTodosElementos}`);
console.log('Matriz:');
matriz.forEach(linha => console.log(linha));
