const prompt = require('prompt-sync')();

function verificarTriangulo() {
  const a = parseFloat(prompt('Informe o comprimento do primeiro segmento: '));
  const b = parseFloat(prompt('Informe o comprimento do segundo segmento: '));
  const c = parseFloat(prompt('Informe o comprimento do terceiro segmento: '));

  if (a < b + c && b < a + c && c < a + b) {
    console.log('Os segmentos podem formar um triângulo.');
  } else {
    console.log('Os segmentos não podem formar um triângulo.');
  }
}

verificarTriangulo();
