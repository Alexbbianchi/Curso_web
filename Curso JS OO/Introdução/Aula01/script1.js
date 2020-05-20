// var mostrarNome = function () {
//     console.log('Alex expressão');
// }

// mostrarNome();

var mostrarNome = function (nome, sobrenome) {
    var qtd = arguments.length;
    var nomeCompleto = '';

    // while(qtd > 0) {
    //     nomeCompleto += ' ' + arguments[qtd -1];
    //     qtd--;
    // }
    
    // for(var i = 0; qtd > i; i++) {
    //     nomeCompleto += ' ' + arguments[i];
    // }

    for(var i in arguments){
        nomeCompleto += ' ' + arguments[i];
    }

    console.log(nomeCompleto);
}

mostrarNome('Alexssandro', 'Britez', 'Bianchi');