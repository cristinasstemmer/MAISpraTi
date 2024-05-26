function criarMatrizIdentidade(tamanho) {
    const matriz = Array.from({ length: tamanho }, () => Array(tamanho).fill(0));
    for (let i = 0; i < tamanho; i++) {
      matriz[i][i] = 1;
    }
    return matriz;
  }
  
  const matrizIdentidade = criarMatrizIdentidade(7);
  console.log('Matriz Identidade 7x7:');
  matrizIdentidade.forEach(linha => console.log(linha.join(' ')));
  