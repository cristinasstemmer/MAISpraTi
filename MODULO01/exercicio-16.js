let contador = 0;
let valor = 101;

while (contador < 50) {
    let divisor = 2;
    let primo = true;

    while (divisor < valor){
        if (valor % divisor === 0) {
            primo = false;
            break;
        }
        divisor++
    } 
    
    if (primo) {
        console.log(valor);
        contador++
    }
    valor++
  }
  
