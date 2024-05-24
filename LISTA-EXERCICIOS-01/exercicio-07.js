let prompt = require('prompt-sync')();

const macas = parseInt(prompt('Digite a quantidade de maçãs a serem compradas: '));

if (macas < 12) {
    let valor = (macas * 0.3)
    console.log(`O valor total da compra de ${macas} maçãs é R$${valor}`)
} else if (macas >= 12) {
    let valor2 = (macas * 0.25)
    console.log(`O valor total da compra de ${macas} maçãs é R$${valor2}`)
}