function somasLinhasColunas(matriz) {
    const somaLinhas = matriz.map(linha => linha.reduce((acc, val) => acc + val, 0));
    const somaColunas = matriz[0].map((_, colIndex) => matriz.reduce((acc, linha) => acc + linha[colIndex], 0));
  
    return { somaLinhas, somaColunas };
  }
  
  const matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];
  
  const { somaLinhas, somaColunas } = somasLinhasColunas(matriz);
  console.log('Matriz:');
  matriz.forEach(linha => console.log(linha));
  console.log('Somas das linhas:', somaLinhas);
  console.log('Somas das colunas:', somaColunas);
  