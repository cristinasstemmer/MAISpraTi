const prompt = require('prompt-sync')();

const gabarito = [];
console.log("Informe os 20 elementos do gabarito:");
for (let i = 0; i < 20; i++) {
  gabarito.push(prompt(`Elemento ${i + 1}: `));
}

const alunos = [];

for (let i = 0; i < 50; i++) {
  const respostas = [];
  console.log(`Informe as 20 respostas do aluno ${i + 1}:`);
  for (let j = 0; j < 20; j++) {
    respostas.push(prompt(`Resposta ${j + 1}: `));
  }
  alunos.push({ numeroAluno: i + 1, respostas });
}

alunos.forEach(aluno => {
  const acertos = aluno.respostas.reduce((total, resposta, index) => 
    total + (resposta === gabarito[index] ? 1 : 0), 0);
  console.log(`Aluno ${aluno.numeroAluno}: ${acertos} acertos.`);
  if (acertos >= 12) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
});
