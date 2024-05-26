const prompt = require('prompt-sync')();

function calcularFolhaPagamento() {
  const funcionarios = [];

  for (let i = 0; i < 80; i++) {
    const matricula = prompt(`Informe a matrícula do funcionário ${i + 1}: `);
    const nome = prompt(`Informe o nome do funcionário ${i + 1}: `);
    const salarioBruto = parseFloat(prompt(`Informe o salário bruto do funcionário ${i + 1}: `));
    const deducaoINSS = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - deducaoINSS;

    funcionarios.push({
      matricula,
      nome,
      salarioBruto,
      deducaoINSS,
      salarioLiquido
    });
  }

  console.log('Contracheques:');
  funcionarios.forEach(funcionario => {
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${funcionario.deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
    console.log('----------------------------');
  });
}

calcularFolhaPagamento();
