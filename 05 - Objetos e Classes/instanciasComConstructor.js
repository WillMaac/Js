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

//As instâncias é uma ocorrencia do objeto//
const will = new pessoa("Will", 26);
const gustavo = new pessoa ("Gustavo", 30);

will.descrever();
gustavo.descrever();
console.log(gustavo);
