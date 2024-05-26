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

function somarColunas(matriz) {
  const colunas = matriz[0].length;
  const somaColunas = Array(colunas).fill(0);

  matriz.forEach(linha => {
    linha.forEach((valor, indice) => {
      somaColunas[indice] += valor;
    });
  });

  return somaColunas;
}

const matriz = lerMatriz(15, 20);
const somaColunas = somarColunas(matriz);
console.log('Soma de cada coluna:');
somaColunas.forEach((soma, indice) => {
  console.log(`Coluna ${indice + 1}: ${soma}`);
});
