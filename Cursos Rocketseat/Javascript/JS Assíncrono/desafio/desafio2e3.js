var btn = document.querySelector('button');
var usuario = document.querySelector('#user');
var root = document.querySelector('#root');

const lowerName = (name) => name.toLowerCase();

function searchGitRepositories() {

    root.innerHTML = 'Carregando...';

    var user = lowerName(usuario.value);
    var stringUserGit = `https://api.github.com/users/${user}/repos`;

    axios.get(stringUserGit)
        .then((response)=> {
            repositorios(response);
        })
        .catch((err) => {
            error(err)
        });   
}

function repositorios(response) {
    var repositories = response.data;

    if(repositories.length == 0){
        return root.innerHTML = 'Usuário não possui repositórios';
    }

    root.innerHTML = `${lowerName(usuario.value)}`;

    for(var repository of repositories ){
        var lista = document.querySelector('ul');

        var item = document.createElement('li');
        var itemText = document.createTextNode(repository.name);
        item.appendChild(itemText);
        lista.appendChild(item);
    }
    usuario.value = '';
    usuario.focus();
}

function error(err) {
    console.log(err);
    root.innerHTML = 'Usuário inválido';
}

btn.onclick = searchGitRepositories;