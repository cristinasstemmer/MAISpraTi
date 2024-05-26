const prompt = require('prompt-sync')();

const gabarito = [];
console.log("Informe os 20 elementos do gabarito (apenas um caractere por questão):");
for (let i = 0; i < 20; i++) {
  let resposta;
  do {
    resposta = prompt(`Elemento ${i + 1}: `);
    if (resposta.length !== 1) {
      console.log("Por favor, informe apenas um caractere.");
    }
  } while (resposta.length !== 1);
  gabarito.push(resposta);
}

const alunos = [];

for (let i = 0; i < 50; i++) {
  const respostas = [];
  console.log(`Informe as 20 respostas do aluno ${i + 1} (apenas um caractere por questão):`);
  for (let j = 0; j < 20; j++) {
    let resposta;
    do {
      resposta = prompt(`Resposta ${j + 1}: `);
      if (resposta.length !== 1) {
        console.log("Por favor, informe apenas um caractere.");
      }
    } while (resposta.length !== 1);
    respostas.push(resposta);
  }
  alunos.push({ numeroAluno: i + 1, respostas });
}

alunos.forEach(aluno => {
  let acertos = 0;
  for (let i = 0; i < 20; i++) {
    if (aluno.respostas[i] === gabarito[i]) {
      acertos++;
    }
  }
  console.log(`Aluno ${aluno.numeroAluno}: ${acertos} acertos.`);
  if (acertos >= 12) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
});
