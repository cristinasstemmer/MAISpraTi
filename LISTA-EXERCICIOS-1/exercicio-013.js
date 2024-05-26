let prompt = require('prompt-sync')();

for (let v = 0; v < 5; v++) {
    let valor = parseInt(prompt(`Digite o ${v+1}º valor: `));
    console.log(`Tabuada de ${valor}:`);
    for (let i = 1; i <= valor; i++) {
        console.log(`${i} x ${valor} = ${i * valor}\n`);
}
}