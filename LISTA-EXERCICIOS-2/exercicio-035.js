const prompt = require('prompt-sync')();

function preencherVetores(valores) {
  const pares = [];
  const impares = [];

  valores.forEach(valor => {
    if (valor % 2 === 0) {
      pares.push(valor);
      if (pares.length === 5) {
        console.log('Vetor de pares cheio:', pares);
        pares.length = 0;
      }
    } else {
      impares.push(valor);
      if (impares.length === 5) {
        console.log('Vetor de ímpares cheio:', impares);
        impares.length = 0;
      }
    }
  });

  return { pares, impares };
}

const valores = [];
for (let i = 0; i < 30; i++) {
  const valor = parseInt(prompt(`Informe o valor ${i + 1}: `), 10);
  valores.push(valor);
}

const { pares, impares } = preencherVetores(valores);

if (pares.length > 0) {
  console.log('Vetor de pares restante:', pares);
}
if (impares.length > 0) {
  console.log('Vetor de ímpares restante:', impares);
}
