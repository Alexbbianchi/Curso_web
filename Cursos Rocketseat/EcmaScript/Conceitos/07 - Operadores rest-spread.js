//Rest
//pegar o resto das propriedades

/**
 * Objeto
 */
const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: "Rocketseat"
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

/**
 * Array
 */
const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

/**
 * Functions
 */
const soma = (...params) => params.reduce((total, next) => total + next);

console.log(soma(1, 2, 3, 4));

//Spread
//Repassa o valor para outro
/**
 * Array
 */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
/**
 * Objeto
 */
const usuario2 = {
    nome: 'Diego',
    idade: 23,
    empresa: "Rocketseat"
};

const usuario3 = {...usuario2, nome: 'Gabriel'};

console.log(usuario3);