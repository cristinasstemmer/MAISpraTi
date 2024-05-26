const obj = { 
  a: 1, 
  b: 2, 
  c: 3, 
  d: ['apple', 'banana', 'orange'], 
  e: 'hello' 
};

function transformarPropriedades(obj, func) {
  const novoObj = {};
  for (let chave in obj) {
    const valor = obj[chave];
    if (Array.isArray(valor)) {
      novoObj[chave] = valor.map(func);
    } else if (typeof valor === 'string') {
      novoObj[chave] = func(valor);
    } else {
      novoObj[chave] = func(valor);
    }
  }
  return novoObj;
}

const novoObjeto = transformarPropriedades(obj, valor => typeof valor === 'number' ? valor * 2 : valor.toUpperCase());
console.log(novoObjeto);
