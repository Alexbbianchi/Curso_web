var carro = {
    portas: Number,
    marca: String
}

carro.portas = 4;
carro.marca = "Chavrolet"


// function teste() {
//     if(carro.portas === 4){
//         modelo = "Modelo 4 portas";
//         console.log(modelo);
//     }
//     else{
//         modelo = "Modelo 2 portas";
//         console.log(modelo);
//     }
// }
// teste();
var modelo = carro.portas === 2 ? "Modelo 4 portas" : "Modelo 2 portas";
console.log( modelo );

console.log( "==========================================" );

function gerar ()
{
    var input = parseInt( document.getElementById( "data" ).value );
    gerarData( input );
}
function gerarData ( input )
{

    if ( !input ){
        input = 0;
    }
    var data = new Date();//Ano, Mes, Dia, Hora, Minutos, Segundos, Milisegundos
    var ndata = new Date();
    ndata.setDate( data.getDate() + input );
    // Data
    var diasem = ndata.getDay();
    var dia = ndata.getDate();
    var mes = ndata.getMonth();
    var ano = ndata.getFullYear();
    // Tempo
    var horas = ndata.getHours();
    var minutos = ndata.getMinutes();
    var segundos = ndata.getSeconds();

    var semanas = new Array(
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sabado"
    );
    var meses = new Array(
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    );
    var calendario = ( semanas[ diasem ] + ", " + dia + " de " + meses[ mes ] + " de " + ano + "<br/>" );
    var relogio = ( horas + ":" + minutos + ":" + segundos );

    document.getElementById( "div" ).innerHTML = ( calendario + relogio );
}
