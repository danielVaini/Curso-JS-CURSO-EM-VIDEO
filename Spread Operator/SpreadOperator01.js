const unidades = [1, 2, 3]
const dezenas = [10, 20, 30]
const centenas = [100, 200, 300]
const centenasString = ["Cem", "Duzentos", "Trezentos"]

var array1 = [...unidades, ...dezenas]



var array2 = [...unidades, 10, 34, 87, ...dezenas]


var array3 = [...unidades, ...centenas, ...dezenas, ...centenasString, ...array1]

console.log(array3)

