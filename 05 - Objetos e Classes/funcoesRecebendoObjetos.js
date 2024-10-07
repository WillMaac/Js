class pessoa {
    nome;
    idade;
    //O construtor é um método utilizado para criar e inicializar objetos a partir de uma classe. É como um molde que define a estrutura e os valores iniciais de um objeto.
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade>p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
        
    }else if(p2.idade>p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
        
    }else{`${p1.nome} e ${p2.nome} tem a mesma idade`}
}

const will = new pessoa("Will", 26);
const gustavo = new pessoa("Gustavo", 30);

compararPessoas(will, gustavo);