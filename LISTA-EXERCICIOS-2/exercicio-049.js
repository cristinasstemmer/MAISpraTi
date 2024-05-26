const transacoes = [
  { id: 1, valor: 100, data: '2024-05-01', categoria: 'Alimentação' },
  { id: 2, valor: 50, data: '2024-05-02', categoria: 'Transporte' },
  { id: 3, valor: 70, data: '2024-05-03', categoria: 'Alimentação' },
  { id: 4, valor: 200, data: '2024-05-04', categoria: 'Entretenimento' },
  { id: 5, valor: 30, data: '2024-05-05', categoria: 'Transporte' }
];

function categorizarTransacoes(transacoes) {
  const categorias = {};
  transacoes.forEach(transacao => {
      const { categoria, ...resto } = transacao;
      if (!categorias[categoria]) {
          categorias[categoria] = { transacoes: [], subtotal: 0 };
      }
      categorias[categoria].transacoes.push(resto);
      categorias[categoria].subtotal += transacao.valor;
  });
  return categorias;
}

const transacoesPorCategoria = categorizarTransacoes(transacoes);
console.log(JSON.stringify(transacoesPorCategoria, null, 2));
