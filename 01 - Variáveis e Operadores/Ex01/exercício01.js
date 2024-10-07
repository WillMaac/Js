/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distancia em KM da viagem;
*/

const combustivel = 5.93;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const  ValorGasto = litrosConsumidos * combustivel;
console.log(ValorGasto.toFixed(2));


