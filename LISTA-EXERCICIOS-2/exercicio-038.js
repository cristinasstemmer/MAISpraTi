const prompt = require('prompt-sync')();

const vetor = [];
console.log("Informe os 6 elementos do vetor:");
for (let i = 0; i < 6; i++) {
  vetor.push(parseInt(prompt(`Elemento ${i + 1}: `), 10));
}

const operacao = parseInt(prompt("Informe a operação (1- soma, 2- produto, 3- média, 4- ordenar, 5- mostrar): "), 10);

switch (operacao) {
  case 1:
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
    console.log(`Soma dos elementos: ${soma}`);
    break;
  case 2:
    let produto = 1;
    for (let i = 0; i < vetor.length; i++) {
      produto *= vetor[i];
    }
    console.log(`Produto dos elementos: ${produto}`);
    break;
  case 3:
    let total = 0;
    for (let i = 0; i < vetor.length; i++) {
      total += vetor[i];
    }
    const media = total / vetor.length;
    console.log(`Média dos elementos: ${media}`);
    break;
  case 4:
    const vetorOrdenado = [...vetor].sort((a, b) => a - b);
    console.log("Vetor ordenado:", vetorOrdenado);
    break;
  case 5:
    console.log("Vetor:", vetor);
    break;
  default:
    console.log("Operação inválida");
}
