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

function calcularMediaDiagonalSecundaria(matriz) {
  const tamanho = matriz.length;
  let soma = 0;
  for (let i = 0; i < tamanho; i++) {
    soma += matriz[i][tamanho - 1 - i];
  }
  return soma / tamanho;
}

function multiplicarDiagonalPrincipal(matriz, mediaSecundaria) {
  const matrizModificada = matriz.map((linha, i) => {
    return linha.map((valor, j) => {
      if (i === j) {
        return valor * mediaSecundaria;
      }
      return valor;
    });
  });
  return matrizModificada;
}

const M = lerMatriz(3);
const mediaSecundaria = calcularMediaDiagonalSecundaria(M);
const matrizModificada = multiplicarDiagonalPrincipal(M, mediaSecundaria);

console.log('Matriz modificada:');
matrizModificada.forEach(linha => console.log(linha));
