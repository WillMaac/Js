/*Desenvolva um algoritmo que peça para o usuário informar um número.

Caso o número seja maior do que 10, o algoritmo deverá informar o usuário
*/


const numero = prompt("Digite um número")
const numero10 = numero==10;

if(numero>10){
    console.log("Esse número é maior que 10")
    
}else if(numero10){
    console.log("Esse número é o 10");    
}

else{
    console.log("Esse número é menor que 10");
    
}

