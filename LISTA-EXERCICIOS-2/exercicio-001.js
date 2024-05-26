const prompt = require('prompt-sync')();

function calcularPerdaDeVida() {
  const cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '));
  const anosFumando = parseInt(prompt('Há quantos anos você fuma? '));

  const minutosPerdidosPorDia = cigarrosPorDia * 10;
  const diasFumando = anosFumando * 365;
  const minutosPerdidosTotal = minutosPerdidosPorDia * diasFumando;
  const diasPerdidos = minutosPerdidosTotal / 1440;

  console.log(`Você perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);
}

calcularPerdaDeVida();
