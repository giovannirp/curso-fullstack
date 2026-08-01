const totalDias = 10;
let dia = 1;
let economia = 0;

do {
  economia += dia;
  dia++;
} while (dia <= totalDias);

console.log(`Total economizando: R$ ${economia}`);