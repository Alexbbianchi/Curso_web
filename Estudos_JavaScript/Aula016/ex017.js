function parimp(n) {
    return n%2 == 0 ? 'Par!' : 'Impar!'
}
console.log(parimp(4));

function soma(n1=0, n2=0) {
    return n1 + n2;
}
console.log(soma(8));


var valor = function(x) {
    return x*2;
}
console.log(valor(8));

function fatorial(n) {
    var fat = 1;
    for(var i = n; i > 1; i--) {
        fat *= i;
    }
    return fat;
}
console.log(fatorial(5));

//Recursividade
function fatorial(n) {
    return n==1 ? 1 : n * fatorial(n-1);
}
console.log(fatorial(5));

