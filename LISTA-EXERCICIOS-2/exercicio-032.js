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

function dividirPorMaiorElemento(matriz) {
  const matrizModificada = matriz.map(linha => {
    const maiorElemento = Math.max(...linha.map(Math.abs));
    return linha.map(valor => valor / maiorElemento);
  });
  return matrizModificada;
}

const M = lerMatriz(12, 13);
const matrizModificada = dividirPorMaiorElemento(M);

console.log('Matriz lida:');
M.forEach(linha => console.log(linha));
console.log('Matriz modificada:');
matrizModificada.forEach(linha => console.log(linha));
