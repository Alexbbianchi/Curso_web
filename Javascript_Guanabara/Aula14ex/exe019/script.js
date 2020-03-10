let num = document.querySelector('input#fnum');
let lista = document.querySelector('input#flista');
let res = document.querySelector('div#res');
let valores = [];
    
function isNumero(num){
    if(Number(num) >= 1 && Number(num) <=100) return true;
    
    return false;
}    
function inLista(num, list){
    if(list.indexOf(Number(num)) != -1) return true;
    return false;
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item);
    }else{
        alert('Valores invalidos ou já encontrados na lista');
    }
}
