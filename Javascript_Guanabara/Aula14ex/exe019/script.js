function Add() {
    let saida = document.getElementById('saida');
    let lista = document.getElementById('lista');
    let inserir = document.getElementById('inserir');
 
    if(inserir.value.length == 0) return alert('Valor vazio');
    
    
    let listaDeNumeros = [];
    listaDeNumeros.push(inserir.value);

    lista.innerHTML = '';
    for(let item in listaDeNumeros){
        lista.innerHTML += `<h3>Valor ${listaDeNumeros[item]} adicionado</h3>`
    }


    // if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    //     window.alert('[ERRO] Faltam dados!')
    //     res.innerHTML = 'Impossivel contar'
    // } else {
    //     res.innerHTML = 'Contando: <br>'
    //     let i = Number(ini.value)
    //     let f = Number(fim.value)
    //     let p = Number(passo.value)
    //     if (p <= 0) {
    //         alert('Passo invalido! Considerando passo 1')
    //         p = 1
    //     }

    //     if (i < f) { // contagem crescente
    //         for (let c = i; c <= f; c += p) {
    //             res.innerHTML += `${c} \u{1f449}`
    //         }
    //     } else { // contagem decrescente
    //         for (let c = i; c >= f; c -= p) {
    //             res.innerHTML += `${c} \u{1f449}`
    //         }
    //     }
    //     res.innerHTML += `\u{1F3C1}`
    
}