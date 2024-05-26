const arrayStrings = ['banana', 'maçã', 'banana', 'laranja', 'maçã', 'maçã'];

function contarFrequencia(arr) {
  const frequencia = {};
  arr.forEach(item => {
    frequencia[item] = (frequencia[item] || 0) + 1;
  });
  return frequencia;
}

const frequenciaStrings = contarFrequencia(arrayStrings);
console.log(frequenciaStrings);
