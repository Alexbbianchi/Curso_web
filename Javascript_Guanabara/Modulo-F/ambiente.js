let num = [2, 6, 8];
console.log(num);

num.push(99);
console.log(num);
// console.log('Posições' ,num.length);
// console.log('Em ordem', num.sort());
// console.log(num.join(' - '));

for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

for(let i in num){
    console.log(num[i])
}

let value = num.indexOf(6);
if(value == -1){
    console.log('No Top')
} else {
    console.log('Posição', value+1)
}