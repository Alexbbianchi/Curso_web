//5.1
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

// function soma...
const soma = (...args) => args.reduce((total, next) => total + next);

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {endereco: {cidade: 'Lontras'}, ...usuario};
console.log(usuario3) 