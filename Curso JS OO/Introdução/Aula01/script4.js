var teste = [5, 9, 8, 6, 3];

function multiplicador(array) {
    return array.map((value)=>{
        return value*10;
    });
} 
console.log(multiplicador(teste));


const meuNomeCompleto = [
    {nome: 'Alex', sexo: 'm'},
    {nome: 'Britez', sexo: 'm'},
    {nome: 'Bianchi', sexo: 'm'}
];

// console.log('Logado o valor de cada parte do nome');
// meuNomeCompleto.forEach((umaParteDoNome) => {
//     console.log(umaParteDoNome.nome)
// });

// console.log('Logado o indice de cada parte do nome');
// meuNomeCompleto.forEach((umaParteDoNome, posicao) => {
//     console.log(`O nome ${umaParteDoNome.nome} da posição ${posicao}`)
// });

// console.log('Logado o cada nome e o array completo');
// meuNomeCompleto.forEach((umaParteDoNome, posicao, arrayCompleto) => {
//     console.log(umaParteDoNome.nome)
//     console.log(posicao)
//     console.log(arrayCompleto)
// });
var newArray = [],
    nomes = [];
meuNomeCompleto.forEach((umaParteDoNome) => {
    newArray.push(umaParteDoNome.nome)
});

for(var i in meuNomeCompleto){
    for(var j in meuNomeCompleto[i]) {
       nomes.push(meuNomeCompleto[i][j]); 
    }
}

    console.log(newArray);
    console.log(nomes);