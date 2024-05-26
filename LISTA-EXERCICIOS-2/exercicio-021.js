function calcularPesoIdeal(altura, sexo) {
    if (sexo === 'M') {
      return 72.7 * altura - 58;
    } else if (sexo === 'F') {
      return 62.1 * altura - 44.7;
    } else {
      throw new Error('Sexo inválido. Use "M" para masculino ou "F" para feminino.');
    }
  }
  
  const prompt = require('prompt-sync')();
  const altura = parseFloat(prompt('Informe a altura em metros: '));
  const sexo = prompt('Informe o sexo (M/F): ').toUpperCase();
  const pesoIdeal = calcularPesoIdeal(altura, sexo);
  console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
  