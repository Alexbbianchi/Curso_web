/*
let mensagem = 5;
console.log(mensagem);
console.log(typeof(mensagem));
*/
/*
function somar(numA, numB) {
    return numA + numB;
}
let resultado = somar(10, 3);
console.log(resultado);
*/
/*
let somar = (numA, numB) => {
    return numA + numB;
}
let resultado = somar(10, 3);
console.log(resultado);
*/
/*
let finalSemana = ['sábado', 'domingo'];
console.log(finalSemana[0]);
finalSemana.push('sexta-feira');
console.dir(finalSemana);
*/
function exibir() {
    let agenda = {
        nome: '',
        sobrenome: '',
        whatsapp: '(31) 8268-1143',
        nomeCompleto: function () {
            return this.nome + ' ' + this.sobrenome;
        }
    }
    agenda.nome = document.getElementById('nome').value
    agenda.sobrenome = document.getElementById('sobrenome').value
    let saida = document.getElementById('saida')
    console.dir(agenda);
    saida.innerHTML += agenda.nomeCompleto()+"<br>"
}
function apagar() {
    let saida = document.getElementById('saida')
    saida.innerHTML = ''
}