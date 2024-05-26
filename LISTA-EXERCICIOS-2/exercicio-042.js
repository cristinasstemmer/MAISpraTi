const dados = {
    nome: 'Carlos',
    idade: 30,
    hobbies: ['futebol', 'leitura'],
    endereco: { cidade: 'São Paulo', estado: 'SP' },
    notas: [8, 9, 7],
    solteiro: true
  };
  
  function filtrarArrays(obj) {
    const resultado = {};
    for (let chave in obj) {
      if (Array.isArray(obj[chave])) {
        resultado[chave] = obj[chave];
      }
    }
    return resultado;
  }
  
  const arraysSomente = filtrarArrays(dados);
  console.log(arraysSomente);
  