/*
1) Faça um algoritimo que dada as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 nota 3)/3;

Classificação:
-Média menor que 5, reprovado;
-Média entre 5 e 7, recuperação;
-Média acima de 7, passou de semestre;
*/

let nota1 = parseFloat(prompt("Digite sua primeira nota"));
let nota2 = parseFloat(prompt("Digite sua segunda nota"));
let nota3 = parseFloat(prompt("Digite sua terceira nota"))
let mediaFinal = (nota1 + nota2 + nota3) / 3;
console.log(mediaFinal.toFixed(2));


if (mediaFinal < 5) {

    console.log("Você foi reprovado!");

} else if (mediaFinal >= 5 && mediaFinal <= 7) {
    console.log("Você ficou de recuperação!");

} else {
    console.log("Você passou de semestre!");

}
