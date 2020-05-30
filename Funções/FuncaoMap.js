// TESTE COM NUMEROS

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


var pos = numeros.map(function(c){
    return c * 10
})


var pos2 = numeros.map((c) => {
    return c + 10;
});


// Teste com operações

var pos3 = numeros.map((c) => {
    return (c + c + c )* (c / c) % c;
});


// console.log(pos3);

// console.log(numeros)

// TESTE COM STRING

const array = ["Daniel", 'Bruno', 'Felipe', 'Gabriel']


var pos4 = array.map((x) => {
    return x + ' Filho';
})



var pos5 = array.map((x) => {
   var filho = 1
   
    return x + ` Filho `
})


console.log(pos5)