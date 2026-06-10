const tempoMinimo = 5;
const tempertemperaturaIdealAlcancadaEm = 3;

let segundos = 0;

do {
    segundos++;
    console.log(`Aquecendo... segundo${segundos}`);

    if (segundos === tempertemperaturaIdealAlcancadaEm) {
        console.log("temperatura ideal atingida");
    }
    
} while (segundos < tempoMinimo);

console.log(`Tempo total de aquecimento: ${segundos} segundos`);
