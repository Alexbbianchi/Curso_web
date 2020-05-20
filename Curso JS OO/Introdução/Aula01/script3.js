var pessoa = {
    nome : 'Alex',
    idade : 18,
    sexo : 'M',
    casado : false
};

// Validar se possui casado dentro do objeto pessoa
// if ('casado' in pessoa){
if (pessoa.hasOwnProperty('casado')){
    // console.log(pessoa)
    delete pessoa.casado;
}
// varre todos os indices dentro do objeto pessoa
// for(var props in pessoa){
//     console.log(`${props} : ${pessoa[props]}`);
// }
//pega somente as propriedades dentro do objeto pessoa
var propriedade = Object.keys(pessoa);
console.log(propriedade);

for(var i =0; propriedade.length > i; i++) {
    console.log(propriedade[i]);
    console.log(pessoa[propriedade[i]]);

}

console.log('-------------------------------------------');