axios.get('https://api.github.com/users/alexbbiancaahi/repos')
    .then((response)=> {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
