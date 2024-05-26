const prompt = require('prompt-sync')();

function jogarJoKenPo() {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

  const escolhaJogador = prompt('Escolha pedra, papel ou tesoura: ').toLowerCase();

  if (!opcoes.includes(escolhaJogador)) {
    console.log('Escolha inválida.');
  } else {
    console.log(`Computador escolheu: ${escolhaComputador}`);

    if (escolhaJogador === escolhaComputador) {
      console.log('Empate!');
    } else if (
      (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
      (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
      (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
      console.log('Você venceu!');
    } else {
      console.log('Você perdeu!');
    }
  }
}

jogarJoKenPo();
