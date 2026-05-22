// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 

const nome = "Roberta";
const nota = 8;
const faltas = 2;

const recebeBonus = (nota >= 8) && (faltas <= 2) 
    ? `${nome} recebe bônus`
    : `${nome} não recebe bônus`;

console.log(recebeBonus)

