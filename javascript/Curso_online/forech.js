// var objeto = {
//        'Nome'  : 'Manuel',
//        'Sobrenome' : 'Bianchi',
//        'ano' : '1994',
//        'genero' : 'anime' 
// };

// for( variable in objeto){
//     console.log(objeto[variable]);
// }

var js = document.getElementsByClassName('js');

for(var i = 0; i < js.length; i++){
    let text = js[i].innerHTML;
    js[i].innerHTML = `curso ${text}`;
}

var array = ['Nome', 'Manuel','Sobrenome','Bianchi'];

array.forEach(function(element, index){
    if(index === 1){
        array[index] = 'x';
    }
})
console.log(array);
var x;
array.map(function(element, index){
   x = element; 
   console.log(x)
});