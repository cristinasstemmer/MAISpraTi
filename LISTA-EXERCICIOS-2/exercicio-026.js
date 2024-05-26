function calcularProduto(A, B) {
    const linhas = A.length;
    const colunas = A[0].length;
    const P = Array.from({ length: linhas }, () => Array(colunas).fill(0));
  
    for (let i = 0; i < linhas; i++) {
      for (let j = 0; j < colunas; j++) {
        P[i][j] = A[i][j] * B[i][j];
      }
    }
  
    return P;
  }
  
  const A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
  ];
  
  const B = [
    [5, 4, 3, 2, 1],
    [10, 9, 8, 7, 6],
    [15, 14, 13, 12, 11]
  ];
  
  const P = calcularProduto(A, B);
  console.log('Matriz Produto P:');
  P.forEach(linha => console.log(linha));
  