//Faça um algoritmo que vai calcular a média do aluno//
const media = 6;
const nota1 = parseFloat(prompt("Digite sua primeira nota"));
const nota2 = parseFloat(prompt("digite sua segunda nota"))
const nota3 = parseFloat(prompt("digite sua terceira nota"))
const nota4 = parseFloat(prompt("digite sua quarta nota"))
const nota5 = parseFloat(prompt("Digite sua quinta nota"))

const mediaFinal = nota1 + nota2 + nota3 + nota4 + nota5;
const exame = mediaFinal>=4

if (mediaFinal>=6){
    console.log("Parabêns você foi aprovado!");
    
}else if(exame){
    console.log("Você esta de recuperação!");
    
}else{
    console.log("reprovado!");
    
}
