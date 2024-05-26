const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const hoteis = [];
const reservas = [];

function adicionarHotel(nome, quartos, cidade) {
    hoteis.push({ nome, quartos, cidade, avaliacoes: [] });
    console.log(`Hotel ${nome} adicionado com ${quartos} quartos em ${cidade}.`);
}

function fazerReserva(nomeHotel, nomeHospede, numeroQuartos) {
    const hotel = hoteis.find(h => h.nome === nomeHotel);
    if (!hotel) {
      console.log(`Hotel ${nomeHotel} não encontrado.`);
      return;
    }
    if (hotel.quartos < numeroQuartos) {
      console.log(`Não há quartos suficientes disponíveis no hotel ${nomeHotel}.`);
      return;
    }
  
    hotel.quartos -= numeroQuartos;
    reservas.push({ nomeHotel, nomeHospede, numeroQuartos });
    console.log(`Reserva feita para ${nomeHospede} no hotel ${nomeHotel} para ${numeroQuartos} quartos.`);
}

function verReservas() {
  if (reservas.length === 0) {
      console.log("Não há reservas realizadas ainda.");
  } else {
      console.log("Reservas:");
      reservas.forEach((res, index) => {
          console.log(`${index + 1}. Hotel: ${res.nomeHotel}, Hóspede: ${res.nomeHospede}, Quartos: ${res.numeroQuartos}`);
      });
  }
}

function encontrarHoteisPorCidade(cidade) {
    const hoteisEncontrados = hoteis.filter(hotel => hotel.cidade === cidade);
    if (hoteisEncontrados.length > 0) {
        console.log(`Hotéis encontrados em ${cidade}:`);
        hoteisEncontrados.forEach(hotel => {
            console.log(`Hotel: ${hotel.nome}, Quartos disponíveis: ${hotel.quartos}`);
            if (hotel.avaliacoes.length > 0) {
                console.log(`Avaliações:`);
                hotel.avaliacoes.forEach(avaliacao => {
                    console.log(`- ${avaliacao.nomeHospede}: ${avaliacao.avaliacao} - ${avaliacao.comentario}`);
                });
            } else {
                console.log("Este hotel ainda não possui avaliações.");
            }
        });
    } else {
        console.log(`Nenhum hotel encontrado em ${cidade}.`);
    }
}

function listarCidadesDisponiveis() {
    const cidades = [...new Set(hoteis.map(hotel => hotel.cidade))];
    console.log("Opções de cidades disponíveis:");
    cidades.forEach((cidade, index) => {
        console.log(`${index + 1}. ${cidade}`);
    });
}

function cancelarReserva(nomeHospede, nomeHotel) {
    const index = reservas.findIndex(res => res.nomeHospede === nomeHospede && res.nomeHotel === nomeHotel);
    if (index !== -1) {
        const reserva = reservas.splice(index, 1)[0];
        const hotel = hoteis.find(h => h.nome === nomeHotel);
        hotel.quartos += reserva.numeroQuartos;
        console.log(`Reserva de ${nomeHospede} no hotel ${nomeHotel} foi cancelada.`);
    } else {
        console.log(`Reserva não encontrada para ${nomeHospede} no hotel ${nomeHotel}.`);
    }
}

function fazerCheckIn(nomeHospede, nomeHotel) {
    const reserva = reservas.find(res => res.nomeHospede === nomeHospede && res.nomeHotel === nomeHotel);
    if (reserva) {
        console.log(`${nomeHospede} fez check-in no hotel ${nomeHotel}.`);
    } else {
        console.log(`Reserva não encontrada para ${nomeHospede} no hotel ${nomeHotel}.`);
    }
}

function fazerCheckOut(nomeHospede, nomeHotel) {
    const reserva = reservas.find(res => res.nomeHospede === nomeHospede && res.nomeHotel === nomeHotel);
    if (reserva) {
        const hotel = hoteis.find(h => h.nome === nomeHotel);
        hotel.quartos += reserva.numeroQuartos;
        console.log(`${nomeHospede} fez check-out no hotel ${nomeHotel}.`);
    } else {
        console.log(`Reserva não encontrada para ${nomeHospede} no hotel ${nomeHotel}.`);
    }
}

function gerarRelatorioOcupacao(nomeHotel) {
    const hotel = hoteis.find(h => h.nome === nomeHotel);
    if (hotel) {
        const quartosReservados = hotel.quartos - hotel.quartosDisponiveis;
        console.log(`Relatório de Ocupação para ${nomeHotel}:`);
        console.log(`Total de quartos: ${hotel.quartos}`);
        console.log(`Quartos reservados: ${quartosReservados}`);
        console.log(`Quartos disponíveis: ${hotel.quartosDisponiveis}`);
    } else {
        console.log(`Hotel ${nomeHotel} não encontrado.`);
    }
}

function avaliarHotel(nomeHotel, nomeHospede, avaliacao, comentario) {
    const hotel = hoteis.find(h => h.nome === nomeHotel);
    if (hotel) {
        hotel.avaliacoes.push({ nomeHospede, avaliacao, comentario });
        console.log(`${nomeHospede} avaliou o hotel ${nomeHotel} com nota ${avaliacao}: ${comentario}`);
    } else {
        console.log(`Hotel ${nomeHotel} não encontrado.`);
    }
}

function menu() {
    console.log(`
      1. Adicionar Hotel
      2. Fazer Reserva
      3. Ver Reservas
      4. Ver Hotéis Disponíveis por Cidade
      5. Cancelar Reservas
      6. Check-In
      7. Check-Out
      8. Relatório de Ocupação
      9. Avaliar Hotel
      10. Sair
    `);
    rl.question('Escolha uma opção: ', (opcao) => {
        if (opcao === '1') {
            rl.question('Nome do Hotel: ', (nomeHotel) => {
                rl.question('Número de Quartos: ', (quartos) => {
                    rl.question('Cidade: ', (cidade) => {
                        adicionarHotel(nomeHotel, parseInt(quartos), cidade);
                        menu();
                    });
                });
            });
        } else if (opcao === '2') {
            rl.question('Nome do Hotel: ', (nomeHotel) => {
                rl.question('Nome do Hóspede: ', (nomeHospede) => {
                    rl.question('Número de Quartos: ', (numeroQuartos) => {
                        fazerReserva(nomeHotel, nomeHospede, parseInt(numeroQuartos));
                        menu();
                    });
                });
            });
        } else if (opcao === '3') {
            verReservas();
            menu();
        } else if (opcao === '4') {
            listarCidadesDisponiveis();
            rl.question('Escolha uma cidade para ver os hotéis disponíveis: ', (cidadeEscolhida) => {
                encontrarHoteisPorCidade(cidadeEscolhida);
                menu();
            });
        } else if (opcao === '5') {
            rl.question('Nome do Hóspede: ', (nomeHospede) => {
                rl.question('Nome do Hotel: ', (nomeHotel) => {
                    cancelarReserva(nomeHospede, nomeHotel);
                    menu();
                });
            });
        } else if (opcao === '6') {
            rl.question('Nome do Hóspede: ', (nomeHospede) => {
                rl.question('Nome do Hotel: ', (nomeHotel) => {
                    fazerCheckIn(nomeHospede, nomeHotel);
                    menu();
                });
            });
        } else if (opcao === '7') {
            rl.question('Nome do Hóspede: ', (nomeHospede) => {
                rl.question('Nome do Hotel: ', (nomeHotel) => {
                    fazerCheckOut(nomeHospede, nomeHotel);
                    menu();
                });
            });
        } else if (opcao === '8') {
            rl.question('Nome do Hotel: ', (nomeHotel) => {
                gerarRelatorioOcupacao(nomeHotel);
                menu();
            });
        } else if (opcao === '9') {
            rl.question('Nome do Hotel: ', (nomeHotel) => {
                rl.question('Nome do Hóspede: ', (nomeHospede) => {
                    rl.question('Avaliação (de 1 a 5): ', (avaliacao) => {
                        rl.question('Comentário: ', (comentario) => {
                            avaliarHotel(nomeHotel, nomeHospede, parseInt(avaliacao), comentario);
                            menu();
                        });
                    });
                });
            });
        } else if (opcao === '10') {
            rl.close();
        } else {
            console.log('Opção inválida.');
            menu();
        }
    });
}

console.log('Sistema de Reserva de Hotéis');
menu();
