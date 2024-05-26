const prompt = require('prompt-sync')();

const resultadoOficial = [];
console.log("Informe os 5 elementos do resultado oficial da Loto:");
for (let i = 0; i < 5; i++) {
  resultadoOficial.push(parseInt(prompt(`Elemento ${i + 1}: `), 10));
}

const apostas = [];

for (let i = 0; i < 50; i++) {
  const aposta = [];
  console.log(`Informe os 5 elementos da aposta ${i + 1}:`);
  for (let j = 0; j < 5; j++) {
    aposta.push(parseInt(prompt(`Elemento ${j + 1}: `), 10));
  }
  apostas.push(aposta);
}

apostas.forEach((aposta, index) => {
  const ganhador = aposta.every((numero, i) => numero === resultadoOficial[i]);
  if (ganhador) {
    console.log(`Aposta ${index + 1}: Ganhador`);
  }
});
