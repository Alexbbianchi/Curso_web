const usuario = {
    nome: 'Alex',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};

function mostrarNome( {nome, idade}){
    console.log(nome, idade);
}

mostrarNome(usuario);
