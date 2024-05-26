const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const combinado = combinarObjetos(obj1, obj2);
console.log(combinado);
