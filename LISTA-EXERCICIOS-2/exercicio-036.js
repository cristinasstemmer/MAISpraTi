const prompt = require('prompt-sync')();

const gabarito = [];
console.log("Informe os 13 elementos do gabarito:");
for (let i = 0; i < 13; i++) {
  gabarito.push(parseInt(prompt(`Elemento ${i + 1}: `), 10));
}

const apostadores = [];

for (let i = 0; i < 100; i++) {
  const numeroCartao = parseInt(prompt(`Número do cartão do apostador ${i + 1}: `), 10);
  const respostas = [];
  console.log(`Informe as 13 respostas do apostador ${numeroCartao}:`);
  for (let j = 0; j < 13; j++) {
    respostas.push(parseInt(prompt(`Resposta ${j + 1}: `), 10));
  }
  apostadores.push({ numeroCartao, respostas });
}

apostadores.forEach(apostador => {
  let acertos = 0;
  for (let i = 0; i < 13; i++) {
    if (apostador.respostas[i] === gabarito[i]) {
      acertos++;
    }
  }
  console.log(`Apostador ${apostador.numeroCartao}: ${acertos} acertos.`);
  if (acertos === 13) {
    console.log("Parabéns, tu foi o GANHADOR");
  }
});
