//Adicionando function em objeto//
const pessoa ={nome: 'Willian',
    idade: 20,
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade}`);   
    }
}
pessoa.descrever();

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);    
}
pessoa.descrever();

//Outra forma de acessar valores de objetos//
console.log(pessoa["nome"]);

