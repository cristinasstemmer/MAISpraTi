const prompt = require('prompt-sync')();

function adivinharNumero() {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  let acertou = false;

  while (!acertou) {
    const chute = prompt('Tente adivinhar o número sorteado (entre 1 e 5) ou digite "sair" para desistir: ');

    if (chute.toLowerCase() === 'sair') {
      console.log(`Você desistiu! O número sorteado era ${numeroSorteado}.`);
      break;
    }

    const numeroChutado = parseInt(chute, 10);

    if (numeroChutado === numeroSorteado) {
      console.log('Parabéns! Você acertou.');
      acertou = true;
    } else {
      console.log('Que pena! Você errou. Tente novamente.');
    }
  }
}

adivinharNumero();
