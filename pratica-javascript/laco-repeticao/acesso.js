const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto"
 
let i = 0;
let acessoLiberado = false;

while (i < tentativas.length && i < 3) {
  if (tentativas[i] === senhaCorreta) {
    console.log("Acesso permitido!");
    acessoLiberado = true;
    break
  } else {
    console.log(`Tentativa ${i + 1} inválida.`);
  }
  i++;
}

if (!acessoLiberado) {
  console.log("Acesso bloqueado. Número máximo de tentativas atingido");
}