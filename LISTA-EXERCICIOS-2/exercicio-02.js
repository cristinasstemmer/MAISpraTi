const prompt = require('prompt-sync')();

function verificarVelocidade() {
  const velocidade = prompt('Qual a velocidade do carro (Km/h)? ');

  const limiteVelocidade = 80;
  if (velocidade > limiteVelocidade) {
    const excesso = velocidade - limiteVelocidade;
    const multa = excesso * 5;
    console.log(`Você foi multado! Valor da multa: R$ ${multa.toFixed(2)}`);
  } else {
    console.log('Você está dentro do limite de velocidade.');
  }
}

verificarVelocidade();
