/*
2) O IMC  - Indice de Massa Corporal é um critério da Organização   m   undial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
Abaixo de 10.5 Abaixo do peso;
Entre 18.5 e 25 peso normal;
Entre 25 e 30 acima do peso;
Entre 30 e 40 obeso;
Acima de 40 Obsidade grave;
*/

const peso = parseFloat(prompt("Qual é seu peso?"));
const altura = parseFloat(prompt("Qual é sua altura"));
const imc = peso / Math.pow(altura, 2);


if (imc < 10.5) {
    console.log("Abaixo do peso");

} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");

} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");

} else if (imc >= 30 && imc < 40) {
    console.log("Obeso");

} else {
    console.log("Obsidade grave");

}


