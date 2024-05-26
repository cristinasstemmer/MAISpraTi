const prompt = require('prompt-sync')();

function calcularSalarios() {
  let totalHomens = 0;
  let totalMulheres = 0;

  while (true) {
    const salario = parseFloat(prompt('Informe o salário do funcionário: '));
    const sexo = prompt('Informe o sexo (M/F) do funcionário: ').toUpperCase();

    if (sexo === 'M') {
      totalHomens += salario;
    } else if (sexo === 'F') {
      totalMulheres += salario;
    } else {
      console.log('Sexo inválido.');
      continue;
    }

    const continuar = prompt('Deseja continuar? (S/N): ').toUpperCase();
    if (continuar !== 'S') {
      break;
    }
  }

  console.log(`Total pago aos homens: R$ ${totalHomens.toFixed(2)}`);
  console.log(`Total pago às mulheres: R$ ${totalMulheres.toFixed(2)}`);
}

calcularSalarios();
