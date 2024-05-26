function vetorFibonacci() {
    const vetor = [1, 1];
    
    for (let i = 2; i < 15; i++) {
      vetor[i] = vetor[i - 1] + vetor[i - 2];
    }
  
    console.log('Os primeiros 15 elementos da sequência de Fibonacci são:');
    console.log(vetor);
  }
  
  vetorFibonacci();
  