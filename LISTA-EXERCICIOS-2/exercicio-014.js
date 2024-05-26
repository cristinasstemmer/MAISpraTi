const prompt = require('prompt-sync')();

function listaNomes() {
  const nomes = [];

  for (let i = 0; i < 7; i++) {
    const nome = prompt(`Informe o nome da pessoa ${i + 1}: `);
    nomes.push(nome);
  }

  console.log('Nomes na ordem inversa:');
  for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
  }
}

listaNomes();
