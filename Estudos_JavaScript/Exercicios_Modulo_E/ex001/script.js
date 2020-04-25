function contar() {
    var txtInicio = document.querySelector('input#txtInicio');
    var txtFim = document.querySelector('input#txtFim');
    var txtPasso = document.querySelector('input#txtPasso');
    var res = document.querySelector('div#res');

    if(txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0 ){
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'; 
        var inicio = Number(txtInicio.value);
        var fim = Number(txtFim.value);
        var passo = Number(txtPasso.value);
        if(passo <= 0 ) {
            alert('p invalido! Considerando PASSO 1');
            passo = 1;
        }
        if(inicio < fim) {
            for(inicio; inicio <= fim; inicio += passo){
                res.innerHTML += `${inicio} \u{1F449}`;
            }
        } else {
            for(inicio; inicio >= fim; inicio -= passo){
                res.innerHTML += `${inicio} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}