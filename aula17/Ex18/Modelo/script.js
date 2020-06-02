var array = [];
var sel = document.querySelector('select.sec');
var inpElement = document.querySelector('input.inpNum');
var inpValue = Number(inpElement.value);
var res = document.querySelector('div.res');


var IsNumber = (n) => {
    if(Number(n) >= 0 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

var inList = (n, l) => {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

var addArray = () => {
    res.innerHTML = '';
    if(IsNumber(inpValue) && !inList(inpValue, array)){
    }else {
        array.push(inpValue);
        console.log(array)
        
        
        var opt = document.createElement('option');
        opt.text = `Valor ${inpValue} adicionado`
        
        sel.appendChild(opt)
        window.alert("Numero invalido")
        
    }
}
    


var resultElement = () => {
    if(array == ''){
        window.alert('Adicione valores antes de finalizar')
    }else{

        res.innerHTML = `Foi registrado ${array.length} numeros. <br><br>`
        var max = Math.max(...array);
        var min = Math.min(...array)
        res.innerHTML += `O maior valor digitado foi: ${max} <br><br>`
        res.innerHTML += `O menor valor digitado foi: ${min} <br><br>`
        var soma = 0;
        for(n of array){
            
            soma = soma + n;
            
        };
        res.innerHTML += `A soma de todos os valores é: ${soma} <br><br>`
        
        var div = soma / array.length;
        
        res.innerHTML += `A média dos valores é: ${div}`
        
    }
}