let num = document.querySelector('input#fnum');
let lista = document.querySelector('input#flista');
let res = document.querySelector('div#res');
let valores = [];
    
function isNumero(num){
    if(Number(num) >= 1 && Number(num) <=100){
        return true;
    }else {
        return false;
    }
}    
function inLista(num, val){
    
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){

    }
}
