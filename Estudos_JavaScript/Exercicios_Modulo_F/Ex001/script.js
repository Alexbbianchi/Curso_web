var numero = document.getElementById('numero');
var select = document.getElementById('xValores');
var res = document.getElementById('res');
var valores = [];

function adicionar() {

    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value));
        var item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado`;
        select.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    numero.value = '';
    numero.focus();
}

function finalizar() {
    if( valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        var total = valores.length;
        var maior = valores[0];
        var menor = valores[0];
        var soma = 0;
        var media = 0;
        for(var pos in valores) {
            soma += valores[pos];
            if(valores[pos] > maior) maior = valores[pos];    
            if(valores[pos] < menor) menor = valores[pos];    
        }
        media = soma / total;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados!</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;     
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
        res.innerHTML += `<p>A soma de todos os valores, temos ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`;
    }
}

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100 ? true : false;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1 ? true : false;
}