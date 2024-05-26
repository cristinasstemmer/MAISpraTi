const prompt = require('prompt-sync')();

function validarHorario(horario) {
  const [hh, mm, ss] = horario.split(':').map(Number);
  if (
    hh >= 0 && hh <= 23 &&
    mm >= 0 && mm <= 59 &&
    ss >= 0 && ss <= 59
  ) {
    return true;
  }
  return false;
}

function lerHorarios() {
  const horarios = [];

  for (let i = 0; i < 5; i++) {
    let horario;
    do {
      horario = prompt(`Informe o horário ${i + 1} (HH:MM:SS): `);
      if (!validarHorario(horario)) {
        console.log('Horário inválido. Tente novamente.');
      }
    } while (!validarHorario(horario));
    horarios.push(horario);
  }

  console.log('Horários validados:');
  horarios.forEach(h => console.log(h));
}

lerHorarios();
