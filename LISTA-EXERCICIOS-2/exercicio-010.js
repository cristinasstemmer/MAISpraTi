const prompt = require('prompt-sync')();

function analisarNumeros() {
  let soma = 0;
  let menor;
  let totalNumeros = 0;
  let totalPares = 0;

  while (true) {
    const numero = parseFloat(prompt('Informe um número: '));
    soma += numero;
    totalNumeros += 1;

    if (numero % 2 === 0) {
      totalPares += 1;
    }

    if (menor === undefined || numero < menor) {
      menor = numero;
    }

    let continuar;
    while (true) {
      continuar = prompt('Deseja continuar? (S/N): ').toUpperCase();
      if (continuar === 'S' || continuar === 'N') {
        break;
      } else {
        console.log('Resposta inválida. Por favor, responda com "S" para sim ou "N" para não.');
      }
    }

    if (continuar !== 'S') {
      break;
    }
  }

  const media = soma / totalNumeros;
  console.log(`Somatório: ${soma}`);
  console.log(`Menor valor: ${menor}`);
  console.log(`Média: ${media}`);
  console.log(`Total de números pares: ${totalPares}`);
}

analisarNumeros();
