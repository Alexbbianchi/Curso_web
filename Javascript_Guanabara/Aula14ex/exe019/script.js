let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];
    
function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <=100) return true;
    
    return false;
}    
function inLista(num, list) {
    if(list.indexOf(Number(num)) != -1) return true;
    return false;
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item);
        res.innerHTML = '';
    }else{
        alert('Valores invalidos ou já encontrados na lista');
    }
    num.value = "";
    num.focus();
}

function finalizar() {
    if(valores.length == 0) return alert("Adicione valores antes de finalizar!");
    
    let total = valores.length;
    let maior = [0];
    let menor = [0];
    let soma = 0;
    let media = 0;

    for(let pos in valores){
        soma +=valores[pos];
        if(valores[pos] > maior) maior = valores[pos];
        if(valores[pos] < menor) menor = valores[pos];
    }
    media = soma / total;
    res.innerHTML = '';
    res.innerHTML += ` 
                        <p>Ao todo, temos ${total} números cadastrados.</p>
                        <p>O maior valor informado foi ${maior}.;
                        <p>O menor valor informado foi ${menor}.;
                        <p>Somando todos os valores, temos ${soma}.;
                        <p>A média dos valores digitados é ${media}.;
                    `;
    
    
}
