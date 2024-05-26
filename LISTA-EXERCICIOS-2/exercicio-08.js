const prompt = require('prompt-sync')();

function calcularPontosAtividade() {
  const horasAtividade = parseFloat(prompt('Quantas horas de atividade física no mês? '));

  let pontos;
  if (horasAtividade < 10) {
    pontos = horasAtividade * 2;
  } else if (horasAtividade <= 20) {
    pontos = horasAtividade * 5;
  } else {
    pontos = horasAtividade * 10;
  }

  const dinheiro = pontos * 0.05;
  console.log(`Você ganhou ${pontos} pontos e R$ ${dinheiro.toFixed(2)}.`);
}

calcularPontosAtividade();
