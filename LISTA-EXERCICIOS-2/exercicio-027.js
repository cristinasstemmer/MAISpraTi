const prompt = require('prompt-sync')();

function lerMatriz(linhas, colunas) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      const valor = parseFloat(prompt(`Informe o valor para a posição [${i}][${j}]: `));
      linha.push(valor);
    }
    matriz.push(linha);
  }
  return matriz;
}

function multiplicarMatrizPorValor(matriz, valor) {
  const vetor = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      vetor.push(matriz[i][j] * valor);
    }
  }
  return vetor;
}

const matriz = lerMatriz(6, 6);
const valor = parseFloat(prompt('Informe o valor para multiplicar a matriz: '));
const vetor = multiplicarMatrizPorValor(matriz, valor);

console.log('Vetor com os valores multiplicados:');
console.log(vetor);
