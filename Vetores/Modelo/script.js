var nomes = [];

function registrar(){

    var n = document.querySelector('input#nome');
    var nome = n.value;
    nomes.push(nome);
    console.log(nomes)
}

function pegar(){
    var buttonElement = document.querySelector('input#pos')
    var pos = buttonElement.value;
    var res = document.querySelector('div#res');
    if(nomes[pos] == undefined){
        alert('Vetor vazio')
    }
    else if (pos < 0){
        alert('Digite um nummero > 0')
    }else{
        res.innerHTML = `${nomes[pos]}`
    }
}

function apagar(){
    nomes = [];
    console.log(nomes)
}