// var fat = (n) => {
//     if (n == 1){
//         return 1
//     }else{
//         return n * fat(n - 1)
//     }
// }

// console.log(fat(5))


var fatorial = (n) => {
    var fat = 1;
    if( n == 1){
        return 1
    }else{
        for(var c = n; c > 1; c--){
            fat *= c
            console.log(fat)
        }
        return fat
    }
}

fatorial(5)