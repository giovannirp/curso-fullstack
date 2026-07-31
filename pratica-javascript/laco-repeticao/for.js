for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    if (numero === 15) {
        console.log(`${numero} em ${i} tentativas`);
        break;
    }
}