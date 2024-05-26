const prompt = require('prompt-sync')();

const vetorA = [];
console.log("Informe os 100 elementos do vetor A:");
for (let i = 0; i < 100; i++) {
  vetorA.push(parseInt(prompt(`Elemento ${i + 1}: `), 10));
}

const vetorB = vetorA.filter(valor => valor > 0);

console.log("Vetor B (compactado):", vetorB);
