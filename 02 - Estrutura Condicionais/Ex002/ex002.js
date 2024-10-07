/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, Sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - o tipo de combustivel que está no seu carro:
4 - Gasto médio de combustivel do carro por MediaKeyMessageEvent;
5 - Distancia em KM de viagem;

Imprimir no console o valor que será gasto para realizar esta viagem.*/

const etanol = 3.88;
const gasolina = 5.93;
const tipoCombustivel = prompt("Qual é o tipo de combústivel que está no seu carro?")
const kmLitros = 12
const distancia = 200;
const valorGasto1 = distancia/ kmLitros;
const valorGasto2 = distancia / kmLitros;


if (tipoCombustivel === "etanol") {
    const valorFinal = valorGasto1 * etanol; 
    console.log(`Você irá gastar ${valorFinal.toFixed(2)}, litros`);
    

} else {
    const valorFinal2 = valorGasto2 * gasolina
    console.log(`Você irá gastar ${valorFinal2.toFixed(2)}, litros`);
    
}