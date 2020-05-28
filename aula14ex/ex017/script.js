function calcular(){
    
    var n = document.querySelector('input#n1');
    var res = document.querySelector('div#res')
    var select = document.querySelector('select#select')
    if(n.value.length == 0){
        window.alert('Digite um numero')
    }else{
        select.innerHTML = '';
        var num = Number(n.value);
        for(var c = 0; c <= 10; c++){
            var op = document.createElement('option')
            var mul = c * num;
            op.text += `${num} x ${c} = ${mul}`
            select.add(op);
        }
    }
}