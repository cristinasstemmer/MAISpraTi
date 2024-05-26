const obj = { a: 1, b: 2, c: 3 };

function transformarPropriedades(obj, func) {
  const novoObj = {};
  for (let chave in obj) {
    novoObj[chave] = func(obj[chave]);
  }
  return novoObj;
}

const novoObjeto = transformarPropriedades(obj, valor => valor * 2);
console.log(novoObjeto);
