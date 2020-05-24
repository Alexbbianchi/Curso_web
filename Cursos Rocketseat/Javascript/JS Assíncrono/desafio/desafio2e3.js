var btn = document.querySelector('button');

const lowerName = (name) => name.toLowerCase();

function request() {
    var usuario = document.querySelector('#user').value;
    var stringUserGit = `https://api.github.com/users/${lowerName(usuario)}/repos`;

    axios.get(stringUserGit)
        .then((response)=> {
            repositorios(response);
        })
        .catch((error) => {
            console.warn(error);
        });
}

function repositorios(response) {
    var repositories = response.data;
    
    for(var repository of repositories ){
        var lista = document.querySelector('ul');

        var item = document.createElement('li');
        var itemText = document.createTextNode(repository.name);
        item.appendChild(itemText);
        lista.appendChild(item);
    }
}




btn.onclick = request;