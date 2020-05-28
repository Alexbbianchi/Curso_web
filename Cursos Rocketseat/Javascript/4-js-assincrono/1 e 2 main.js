//#region Promise
var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest(); // dá acesso as funcionalidades do ajax
        xhr.open('GET', 'https://api.github.com/users/alexbbianchi');
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    })
}

minhaPromise()
    .then((response)=> {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
//#endregion
