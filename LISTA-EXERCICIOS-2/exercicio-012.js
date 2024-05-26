function fibonacci() {
    let a = 1, b = 1;
    console.log(a);
    console.log(b);
  
    for (let i = 3; i <= 10; i++) {
      const proximo = a + b;
      console.log(proximo);
      a = b;
      b = proximo;
    }
  }
  
  fibonacci();
  