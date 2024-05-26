const prompt = require('prompt-sync')();

function progressaoAritmetica() {
  const primeiroTermo = parseFloat(prompt('Informe o primeiro termo da PA: '));
  const razao = parseFloat(prompt('Informe a razão da PA: '));

  let soma = 0;
  console.log('Os 10 primeiros termos da PA são:');
  for (let i = 0; i < 10; i++) {
    const termo = primeiroTermo + (i * razao);
    console.log(termo);
    soma += termo;
  }
  console.log(`Soma dos termos: ${soma}`);
}

progressaoAritmetica();
