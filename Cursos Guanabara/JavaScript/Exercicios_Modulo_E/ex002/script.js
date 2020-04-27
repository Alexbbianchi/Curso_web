function gerar() {
    var num = document.getElementById('num');
    var tab = document.getElementById('seltab');
    
    if(num.value.length == 0) {
        alert('[ERRO] Digite um valor válido!');
    } else {
        var numero = Number(num.value);
        tab.innerHTML = '';
        for(var i = 1; i <= 10; i++ ){
            var item = document.createElement('option');
            item.text = `${numero} X ${i} = ${numero*i}`;
            item.value = `tab${i}`;
            tab.appendChild(item);
       }
    }

}