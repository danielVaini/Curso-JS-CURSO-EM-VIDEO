// Fatorial de um numero

function fat(n){
    var n1 = 1;
    for(var c = n; c > 1; c--){
        n1 *= c;
    };
    return n1;
}


console.log(fat(10))