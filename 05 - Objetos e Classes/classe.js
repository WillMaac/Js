//Classes é a definição que deve ser no objeto//
class pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

//As instâncias é uma ocorrencia do objeto//
const will = new pessoa()
will.nome = "Will";
will.idade = 20;

const gustavo = new pessoa ()
gustavo.nome = "Gustavo";
gustavo.idade = 30;

will.descrever();
gustavo.descrever();