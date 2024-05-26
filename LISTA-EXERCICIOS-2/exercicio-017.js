const prompt = require('prompt-sync')();

function listarMenoresIdade() {
  const nomes = [];
  const idades = [];

  for (let i = 0; i < 9; i++) {
    const nome = prompt(`Informe o nome da pessoa ${i + 1}: `);
    const idade = parseInt(prompt(`Informe a idade da pessoa ${i + 1}: `), 10);
    nomes.push(nome);
    idades.push(idade);
  }

  console.log('Pessoas menores de idade:');
  for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
      console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
  }
}

listarMenoresIdade();
