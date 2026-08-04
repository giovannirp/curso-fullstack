const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let processadas = 0;

for (let i = 0; i < caixas.length; i++) {
  let valor = caixas[i];

  if (valor < 0) {
    console.log("Caixa danificada, ignorada.");
    continue;
  }

  console.log(`Caixa processada: ${valor}`);
  processadas++;

  if (processadas === 5) {
    console.log("Limite de caixas processas atingido!");
    break;
  }
}