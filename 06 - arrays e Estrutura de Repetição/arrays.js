/* O que é um array? Array é uma lista organizada de valores, por exemplo imagine uma prateleira onde você pode guardar diversos objetos, cada um com sua própria posição. Em um array, cada um desses valores tem um índice numérico que indica sua posição na lista, começando em 0.
*/

const alunos = ['Maria', 'João', 'Matheus'];

//Acessando o item dentro do array, o indice começa pelo 0 com o indice 1 eu consigo acessar o item João//
console.log(alunos[1]);

//Adicionando um novo item no array//
alunos.push('Will');
alunos[4] = 'Vanessa'
console.log(alunos);

//Como remover um item do array?//
delete alunos[1]
console.log(alunos);

//Remove o último item da lista//
alunos.pop();
console.log(alunos);

//Removendo o primeiro item da lista//
console.log(alunos.shift());
console.log(alunos);





