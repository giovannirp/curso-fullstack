const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;

let segundos = 0;

do {
  segundos++;
  console.log(`Aquecendo... segundo ${segundos}`);

  if (segundos === temperaturaIdealAlcancadaEm) {
    console.log("Temperatura ideal atingida.")
  }
  
} while(segundos < tempoMinimo);

console.log(`Tempo total de aquecimento: ${segundos} segundos`);