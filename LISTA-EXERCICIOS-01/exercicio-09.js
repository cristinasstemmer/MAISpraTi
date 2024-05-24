let prompt = require('prompt-sync')();

let codigoOrigem = parseInt(prompt('Digite o código de origem do produto: '));

if(codigoOrigem === 1){
    console.log('A região do produto cujo código de origem foi inserido é Sul.');
} else if(codigoOrigem ===2){
    console.log('A região do produto cujo código de origem foi inserido é Norte.');
} else if(codigoOrigem === 3){
    console.log('A região do produto cujo código de origem foi inserido é Leste.');
} else if(codigoOrigem === 4){
    console.log('A região do produto cujo código de origem foi inserido é Oeste.');
} else if(codigoOrigem === 5 || codigoOrigem === 6 || codigoOrigem >= 25 && codigoOrigem <=50 ){
    console.log('A região do produto cujo código de origem foi inserido é Nordeste.');
} else if(codigoOrigem === 7 || codigoOrigem === 8 || codigoOrigem === 9){
    console.log('A região do produto cujo código de origem foi inserido é Sudeste.');
} else if(codigoOrigem >= 10 && codigoOrigem <= 20){
    console.log('A região do produto cujo código de origem foi inserido é Centro-Oeste.');
} else {
    console.log('O produto cujo código de origem foi inserido é importado.');
}