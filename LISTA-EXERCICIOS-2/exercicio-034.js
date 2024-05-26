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

function multiplicarLinhasPorDiagonal(matriz) {
  const matrizModificada = matriz.map((linha, i) => {
    const elementoDiagonal = linha[i];
    return linha.map(valor => valor * elementoDiagonal);
  });
  return matrizModificada;
}

const M = lerMatriz(50);
const matrizModificada = multiplicarLinhasPorDiagonal(M);

console.log('Matriz após as multiplicações:');
matrizModificada.forEach(linha => console.log(linha));
