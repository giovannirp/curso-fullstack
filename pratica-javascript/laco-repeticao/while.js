const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas++;
}

console.log(`Adivinhou em ${tentativas} tentativas`)