let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    // console.log(numeroRandom)
} while (numeroRandom % 2 !==0);

console.log(numeroRandom);
