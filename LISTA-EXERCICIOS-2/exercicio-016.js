function preencherVetor() {
    const vetor = [];
  
    for (let i = 0; i < 20; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100);
      vetor.push(numeroAleatorio);
    }
  
    console.log('Números gerados:');
    console.log(vetor);
  
    vetor.sort((a, b) => a - b);
    console.log('Números ordenados:');
    console.log(vetor);
  }
  
  preencherVetor();
  