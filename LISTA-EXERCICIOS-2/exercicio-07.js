const prompt = require('prompt-sync')();

function calcularPrecoAluguel() {
  const tipoCarro = prompt('Tipo de carro (popular ou luxo): ').toLowerCase();
  const diasAluguel = parseInt(prompt('Quantos dias de aluguel? '));
  const kmPercorridos = parseFloat(prompt('Quantos Km foram percorridos? '));

  let precoPorDia, precoPorKm;

  if (tipoCarro === 'popular') {
    precoPorDia = 90;
    if (kmPercorridos <= 100) {
      precoPorKm = 0.20;
    } else {
      precoPorKm = 0.10;
    }
  } else if (tipoCarro === 'luxo') {
    precoPorDia = 150;
    if (kmPercorridos <= 200) {
      precoPorKm = 0.30;
    } else {
      precoPorKm = 0.25;
    }
  } else {
    console.log('Tipo de carro inválido.');
    return;
  }

  const precoTotal = (precoPorDia * diasAluguel) + (precoPorKm * kmPercorridos);
  console.log(`O preço a ser pago é: R$ ${precoTotal.toFixed(2)}`);
}

calcularPrecoAluguel();
