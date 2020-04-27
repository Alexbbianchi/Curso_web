var amigo = {
    name:'Alex',
    idade:'26',
    sexo:'M',
    peso: '65',
    engordar(p=0){
        console.log('Engordou');
        this.peso += p;
    }
};
amigo.engordar(2);
console.log(`${amigo.name} pesa ${amigo.peso} Kg`);


var array = [1, 2, 3, 4];

var res = array.forEach();

console.log(res)