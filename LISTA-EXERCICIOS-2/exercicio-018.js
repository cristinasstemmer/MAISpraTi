const prompt = require('prompt-sync')();

function registrarFuncionario() {
  const funcionario = {
    nome: prompt('Nome do funcionário: '),
    cargo: prompt('Cargo do funcionário: '),
    salario: parseFloat(prompt('Salário do funcionário: '))
  };

  console.log('Registro do funcionário:');
  console.log(`Nome: ${funcionario.nome}`);
  console.log(`Cargo: ${funcionario.cargo}`);
  console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
}

registrarFuncionario();
