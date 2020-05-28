//Mutação
const usuario = { name: "Alex" }

usuario.name = "Teste";

console.log(usuario);

// Escopo
function teste(x){
    let y = 2;

    if(x > 5){
        let y = 4;
        console.log(x, y);
    }
}
teste(10);