var nomes = [];

function registrar(){

    var n = document.querySelector('input#nome');
    var nome = n.value;
    nomes.push(nome);
    console.log(nomes)
}

function pegar(){
    var buttonElement = document.querySelector('input#pos')
    var posi = buttonElement.value;
    var res = document.querySelector('div#res');
    if(nomes[posi] == undefined){
        alert('Vetor vazio')
    }
    else if (posi < 0){
        alert('Digite um numero > 0')
    }else{
        res.innerHTML = `Vetor de posição ${posi} tem o elemento : ${nomes[posi]}`
    }
}

function apagar(){
    var pos = document.querySelector('input#pos').value
    nomes[pos] = [];
    console.log(nomes)
    res.innerHTML = ''
    console.log(pos)
}