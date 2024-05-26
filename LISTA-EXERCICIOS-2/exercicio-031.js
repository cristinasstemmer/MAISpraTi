const prompt = require('prompt-sync')();

function lerMatriz() {
  const matriz = [];

  for (let i = 0; i < 30; i++) {
    const linha = [];
    for (let j = 0; j < 30; j++) {
      const valor = parseInt(prompt(`Informe o valor para a posição [${i}][${j}]: `), 10);
      linha.push(valor);
    }
    matriz.push(linha);
  }
  return matriz;
}

function contarEFiltrarMatriz(matriz, A) {
  let contador = 0;
  const matrizX = [];

  for (let i = 0; i < matriz.length; i++) {
    const linha = [];
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === A) {
        contador++;
      } else {
        linha.push(matriz[i][j]);
      }
    }
    if (linha.length > 0) {
      matrizX.push(linha);
    }
  }

  return { contador, matrizX };
}

const A = parseInt(prompt('Informe o número inteiro A: '), 10);
const V = lerMatriz();
const { contador, matrizX } = contarEFiltrarMatriz(V, A);

console.log(`Quantidade de valores iguais a ${A}: ${contador}`);
console.log('Matriz X (elementos diferentes de A):');
matrizX.forEach(linha => console.log(linha));
