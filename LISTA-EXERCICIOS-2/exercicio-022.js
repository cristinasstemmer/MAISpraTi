const prompt = require('prompt-sync')();

function coletarDados() {
  let totalSalarios = 0;
  let totalFilhos = 0;
  let maiorSalario = 0;
  let totalPessoas = 0;
  let pessoasSalarioAte350 = 0;

  while (true) {
    const salario = parseFloat(prompt('Informe o salário (ou digite -1 para sair): '));
    if (salario === -1) break;

    const numFilhos = parseInt(prompt('Informe o número de filhos: '), 10);

    totalSalarios += salario;
    totalFilhos += numFilhos;
    totalPessoas++;
    if (salario > maiorSalario) maiorSalario = salario;
    if (salario <= 350) pessoasSalarioAte350++;
  }

  const mediaSalarios = totalSalarios / totalPessoas;
  const mediaFilhos = totalFilhos / totalPessoas;
  const percentualSalarioAte350 = (pessoasSalarioAte350 / totalPessoas) * 100;

  return {
    mediaSalarios,
    mediaFilhos,
    maiorSalario,
    percentualSalarioAte350
  };
}

const estatisticas = coletarDados();
console.log(`Média de salários: R$ ${estatisticas.mediaSalarios.toFixed(2)}`);
console.log(`Média de número de filhos: ${estatisticas.mediaFilhos.toFixed(2)}`);
console.log(`Maior salário: R$ ${estatisticas.maiorSalario.toFixed(2)}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${estatisticas.percentualSalarioAte350.toFixed(2)}%`);
