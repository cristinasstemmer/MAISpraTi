function somaAcimaAbaixoDiagonal(matriz) {
    let somaAcima = 0;
    let somaAbaixo = 0;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (i < j) {
          somaAcima += matriz[i][j];
        } else if (i > j) {
          somaAbaixo += matriz[i][j];
        }
      }
    }
  
    return { somaAcima, somaAbaixo };
  }
  
  const matriz = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
  ];
  
  const { somaAcima, somaAbaixo } = somaAcimaAbaixoDiagonal(matriz);
  console.log(`Soma dos elementos acima da diagonal principal: ${somaAcima}`);
  console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);
  