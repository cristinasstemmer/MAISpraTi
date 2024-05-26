const vendas = [
    { vendedor: 'Carlos', valor: 150 },
    { vendedor: 'Ana', valor: 200 },
    { vendedor: 'Carlos', valor: 100 },
    { vendedor: 'Ana', valor: 250 }
  ];
  
  function sumarizarVendas(vendas) {
    const totalVendas = {};
    vendas.forEach(venda => {
      const { vendedor, valor } = venda;
      totalVendas[vendedor] = (totalVendas[vendedor] || 0) + valor;
    });
    return totalVendas;
  }
  
  const totalPorVendedor = sumarizarVendas(vendas);
  console.log(totalPorVendedor);
  