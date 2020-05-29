let num = [1, 5, 6, 8, 7]

// for(let pos = 0; pos < num.length; pos++){
//     console.log(`O vetor de posição ${pos} tem o valor ${num[pos]}`);
// }

// num.sort();

// for(let pos in num){
//     console.log(num[pos])
// } 
num.push(10);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`)
console.log(`Ò primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(7);
if(pos == -1){
    console.log('O valor não foi encontrado');
}else{
    console.log(`O valor está na posição ${pos}`)
}