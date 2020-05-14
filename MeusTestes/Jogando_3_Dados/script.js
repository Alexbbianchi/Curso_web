function verificar() {
    var num = Number(document.querySelector('input#num').value);
    var res = document.querySelector('div#res');

    var soma = 0;
    var p = 0;
    var d1 = 1;
    var d2 = 1;
    var d3 = 1;
    var i =0;
    var i2 = 0;
    
    if(num <3 || num>18) {
        res.innerHTML = `A probabilidade de sair ${num} é de 0%`;
    } else {
        do{
            soma = d1 + d2 + d3;
            if(soma==num){
                console.log(`${d1} + ${d2} + ${d3} = ${soma}`);
                i++;
            }
            if(d3 < 6){
                d3++;
            }else if(d2<6 && d3==6){
                d3=1;
                d2++;
            }else if(d1 <=6 && d2==6 && d3==6){
                d3=1;
                d2=1;
                d1++;
            }
            i2++;
        }while(d1<=6 || d2==6 ||  d3==6);

        p = ((i/i2)*100);
        res.innerHTML = `A probabilidade de sair ${num} é de ${p} %<br>
                        De um total de ${i2} possibilidades<br>
                        Tendo ${i} vezes que formou a soma de ${num}`;

    }

}