const obj = {
    nome: 'Ana',
    idade: 25,
    profissao: 'Engenheira',
    cidade: 'Rio de Janeiro',
    salario: 5000
  };
  
  function contarStrings(obj) {
    let count = 0;
    for (let chave in obj) {
      if (typeof obj[chave] === 'string') {
        count++;
      }
    }
    return count;
  }
  
  const numeroDeStrings = contarStrings(obj);
  console.log(numeroDeStrings);
  