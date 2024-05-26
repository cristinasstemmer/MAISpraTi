function somasMatriz(matriz) {
    const somaLinha4 = matriz[3].reduce((acc, val) => acc + val, 0);
    const somaColuna2 = matriz.reduce((acc, linha) => acc + linha[1], 0);
    const somaDiagonalPrincipal = matriz.reduce((acc, linha, i) => acc + linha[i], 0);
    const somaTodosElementos = matriz.flat().reduce((acc, val) => acc + val, 0);
  
    return { somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTodosElementos };
  }
  
  const matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];
  
  const { somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTodosElementos } = somasMatriz(matriz);
  console.log(`Soma da linha 4: ${somaLinha4}`);
  console.log(`Soma da coluna 2: ${somaColuna2}`);
  console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
  console.log(`Soma de todos os elementos: ${somaTodosElementos}`);
  console.log('Matriz:');
  matriz.forEach(linha => console.log(linha));
  