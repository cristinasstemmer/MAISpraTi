const prompt = require('prompt-sync')();

const vetor = [];
console.log("Informe os 6 elementos do vetor:");
for (let i = 0; i < 6; i++) {
  vetor.push(parseInt(prompt(`Elemento ${i + 1}: `), 10));
}

const operacao = parseInt(prompt("Informe a operação (1- soma, 2- produto, 3- média, 4- ordenar, 5- mostrar): "), 10);

switch (operacao) {
  case 1:
    const soma = vetor.reduce((total, valor) => total + valor, 0);
    console.log(`Soma dos elementos: ${soma}`);
    break;
  case 2:
    const produto = vetor.reduce((total, valor) => total * valor, 1);
    console.log(`Produto dos elementos: ${produto}`);
    break;
  case 3:
    const media = vetor.reduce((total, valor) => total + valor, 0) / vetor.length;
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
