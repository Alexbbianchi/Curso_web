const arr = [1, 3, 5, 4, 9, 8];

const newArr = arr.map(item => item * 2); // Varre o array pegando cada item
console.log( newArr);

const sum = arr.reduce((total, next) => total + next); //Soma o valor mais o proximo (Soma todos valores)
console.log(sum);

const filter = arr.filter(item => item % 2 === 0); //filtra
console.log(filter);

const find = arr.find(item => item === 8); // Verifica se possui o valor 8 no array
console.log(find);
