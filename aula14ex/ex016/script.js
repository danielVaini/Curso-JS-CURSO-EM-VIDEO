function contar(){
    var res = document.getElementById('res');
    var inicio = document.querySelector('input#n1');
    var ini = Number(inicio.value);
    var final = document.querySelector('input#n2')
    var fim = Number(final.value);
    var passo = document.querySelector('input#n3');
    var pass = Number(passo.value);

    res.innerHTML = 'Contando: '

    for(ini; ini <= fim; ini+= pass){
        res
    }
}