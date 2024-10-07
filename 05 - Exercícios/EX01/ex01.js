/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKM;
    constructor (marca, cor, gastoMedioPorKM){
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKM = gastoMedioPorKM
    }
calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKM *precoCombustivel;
}
}

let gol = new Carro("Volkswagen", "Preto", 1/13,3)
console.log(gol.calcularGastoDePercurso(80,6.));

let palio = new Carro("Fiat", "Cinza", 1/10)
console.log(palio.calcularGastoDePercurso(80,6));


