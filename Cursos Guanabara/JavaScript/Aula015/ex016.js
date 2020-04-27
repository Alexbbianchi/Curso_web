var num = [5, 2, 6, 5];

console.log(num);

num.push(4);
console.log(num);

num.sort();
console.log(num);

// for(var i = 0; i < num.length; i++ ){
//     console.log(num[i]);
// }

// for(var i in num){
//     console.log(num[i]);
// }

var pos = num.indexOf(50);

if(pos == -1) return console.log('O valor não foi encontarado!');

console.log(`O valor 6 esta na posição ${pos}`);