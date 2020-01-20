function sumNumber(){
    let result = 1 + 1;
    result == 2 ? sucessCallback() : errorCallBack();
}

function sucessCallback(){
    console.log("Yeah! Number two!!!");
}

function errorCallback(){
    console.log("Oopos! Something wrong!!!");
}
sumNumber();

// ------------------------------------------------------------------
let p = new Promise((resolve, reject)=> {
    let a = 1 + 1;
    a === 2 ? resolve('Sucess') : reject('Failed')
});

p.then((message)=>{
    console.log("This is in the then " + message)
}).catch((err)=>{
    console.log("This is the catch " + err)
});


// ------------------------------------------------------------------
const ul = document.getElementById('users');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((resp)=> resp.json())
    .then(function (data){
        console.log(data);

        return data.map(function (user) {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`;
            ul.appendChild(li);
        })
    })
    .catch((error) => {
        console.log('Opps' + error);
    })
