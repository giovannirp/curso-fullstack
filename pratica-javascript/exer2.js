// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salario = 2000;

if (salario >= 12000) {
    console.log('3 % de bônus');
} else if (salario < 11000 && salario >= 7000) {
    console.log('5 % de bônus');
}
else if (salario < 700 && salario >= 4000) {
    console.log('5 % de bônus');
} else {
    console.log("9 % de bônus");
}