function contar(){
    var inicio = document.querySelector('input#n1');
    var final = document.querySelector('input#n2')
    var passo = document.querySelector('input#n3');
    let res = document.getElementById('res');
    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        window.alert('[ERROR] Faltam dados')
    }else{
        res.innerHTML = 'Contando:  <br>'
        let i = Number(inicio.value);
        let f = Number(final.value);
        let p = Number(passo.value);
        if(p <= 0){
            window.alert('Passo invalido! Considerando passo igual a 1');
            p = 1;
        }
        if(i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML +=`${c} \u{1F449}	`;
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`;
            }

        }

        res.innerHTML += `\u{1f3c1}`
    }
}