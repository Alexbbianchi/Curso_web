const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const userMap = usuarios.map(item => item.idade);
console.log(userMap);

const userFilter = usuarios.filter(item => item.idade >= 18 && item.empresa === 'Rocketseat')
console.log(userFilter);

const userFind = usuarios.find(item => item.empresa === 'Google')
console.log(userFind);

const userUnindo = usuarios.map((item) => {
    return  {...item, idade: item.idade * 2}
}).filter(item => item.idade <=50);
console.log(userUnindo);