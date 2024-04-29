let prompt = require('prompt-sync')();

const nota1 = prompt('Digite a nota da primeira avaliação: ');
const nota2 = prompt('Digite a nota da segunda avaliação: ');

let nota1Float = parseFloat(nota1);
let nota2Float = parseFloat(nota2);

let media = (nota1Float + nota2Float)/2;

if (media >= 6) {
console.log(`PARABÉNS! Você foi aprovado, sua média semestral foi ${media}.`)
} else if (media < 6){
console.log(`Você foi REPROVADO! Estude mais. Sua média semestral foi ${media}.`)
} else {
console.log('Erro! A média não pode ser calculada. Verifique os valores informados.')
}
