var getNome = function(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

var pessoa = {
    nome : '',
    sobrenome : '',
    idade: '25',
};
var carro = {
    nome : 'Corsa',
    marca: 'Chevrolet',
};

// getNome.call(pessoa, 'Alex', 'Bianchi');
getNome.apply(pessoa, ['Alex', 'Bianchi']);
// var teste = getNome.bind(pessoa, 'Alex', 'Bianchi');
// teste()
console.log(pessoa)


/**
 * call
 * bind
 * apply
 */