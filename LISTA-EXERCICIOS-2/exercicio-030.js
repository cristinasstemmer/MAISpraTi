const prompt = require('prompt-sync')();

function lerMatriz() {
  const matriz = [];

  for (let i = 0; i < 5; i++) {
    const linha = [];
    for (let j = 0; j < 5; j++) {
      const valor = parseFloat(prompt(`Informe o valor para a posição [${i}][${j}]: `));
      linha.push(valor);
    }
    matriz.push(linha);
  }

  return matriz;
}

function somasLinhasColunas(matriz) {
  const SL = [];
  const SC = [];

  for (let i = 0; i < matriz.length; i++) {
    let somaLinha = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      somaLinha += matriz[i][j];
    }
    SL.push(somaLinha);
  }

  for (let j = 0; j < matriz[0].length; j++) {
    let somaColuna = 0;
    for (let i = 0; i < matriz.length; i++) {
      somaColuna += matriz[i][j];
    }
    SC.push(somaColuna);
  }

  return { SL, SC };
}

const matriz = lerMatriz();
const { SL, SC } = somasLinhasColunas(matriz);

console.log('Matriz:');
matriz.forEach(linha => console.log(linha));
console.log('Somas das linhas:', SL);
console.log('Somas das colunas:', SC);
