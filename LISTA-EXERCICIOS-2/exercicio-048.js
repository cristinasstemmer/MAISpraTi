const inventarioLojaA = { item1: 5, item2: 10, item3: 15 };
const inventarioLojaB = { item2: 7, item3: 8, item4: 12 };

function combinarInventarios(inventarioA, inventarioB) {
  const inventarioCombinado = { ...inventarioA };
  for (let item in inventarioB) {
    inventarioCombinado[item] = (inventarioCombinado[item] || 0) + inventarioB[item];
  }
  return inventarioCombinado;
}

const inventarioUnico = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioUnico);
