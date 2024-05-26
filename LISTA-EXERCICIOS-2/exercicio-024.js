const matriz = [
    // Exemplo de matriz M[6][8]
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8]
  ];
  
  function contarNegativos(matriz) {
    return matriz.map(linha => linha.filter(elemento => elemento < 0).length);
  }
  
  const vetorC = contarNegativos(matriz);
  console.log('Vetor C com contagem de elementos negativos por linha:');
  console.log(vetorC);
  