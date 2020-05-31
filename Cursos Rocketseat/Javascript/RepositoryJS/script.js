var bodyElement = document.querySelector('div');
//#region Input
var inputElement = document.createElement('input');
inputElement.setAttribute('id', 'user');
inputElement.placeholder = 'Seu nome de usuario';
//#endregion

//#region Button
var buttonElement = document.createElement('button');
var buttonText = document.createTextNode('Buscar');
buttonElement.appendChild(buttonText);
//#endregion

//#region Div
var divElement = document.createElement('div');
divElement.setAttribute('id', 'root');
//#endregion

//#region Create
bodyElement.appendChild(inputElement);
bodyElement.appendChild(buttonElement);
bodyElement.appendChild(divElement);
//#endregion

var btn = document.querySelector('button');
var usuario = document.querySelector('input#user');

const lowerName = (name) => name.toLowerCase();

const upperCaseName = (name) => {
    name = lowerName(name);
    return name.substring(0,1).toUpperCase().concat(name.substring(1))
};

function searchGitRepositories() {

    divElement.innerHTML = '';

    var pElement = document.createElement('p');
    var pText = document.createTextNode('Carregando...');
    pElement.appendChild(pText);
    divElement.appendChild(pElement);

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
    var ulElement = document.createElement('ul');
    divElement.appendChild(ulElement);

    var repositories = response.data;
    let p = document.querySelector('p');
    
    if(repositories.length == 0){

        if(document.querySelector('img.logo')){
            document.querySelector('img.logo').remove();
            document.querySelector("h1").removeAttribute("class");
        }
        
        return p.innerHTML = `${upperCaseName(usuario.value)}: Usuário não possui repositórios`;
    }

    createUserLogo(repositories);
    p.innerHTML = `${upperCaseName(usuario.value)}`;


    for(var repository of repositories ){
        var lista = document.querySelector('ul');

        var item = document.createElement('li');
        var itemText = document.createTextNode(repository.name);
        
        var link = document.createElement('a');
        var iconeLink = document.createElement('img');
        iconeLink.setAttribute('src', './imagens/link.png');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', `${repository.html_url}`);
        
        link.appendChild(iconeLink);
        item.appendChild(itemText);
        item.appendChild(link);
        lista.appendChild(item);
    }
    usuario.value = '';
    usuario.focus();
}

function createUserLogo(repositories) {
    var h1Element = document.querySelector('h1');
    h1Element.setAttribute('class', 'h1Logo');

    var header = document.querySelector('header');
    var userLogo = document.createElement('img');
    userLogo.setAttribute('src', `${repositories[0].owner.avatar_url}`);
    userLogo.setAttribute('class', 'logo');
    header.appendChild(userLogo);
}

function error(err) {
    console.log(err);
    let p = document.querySelector('p');
    p.innerHTML = `${upperCaseName(usuario.value)}: Usuário inválido`;
}

btn.onclick = searchGitRepositories;