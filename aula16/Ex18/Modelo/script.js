var array = [];
var sel = document.querySelector('select.sec');

var res = document.querySelector('div.res');


 var IsNumber = (n) => {
     if(n >= 0 && n <= 100){
         return true
    }else{
         return false
    }
 }

var inList = (n, l) => {
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

var addArray = () => {
    var inpElement = document.querySelector('input.inpNum');
    var inpValue = Number(inpElement.value);
    res.innerHTML = '';
    
    if(IsNumber(inpValue) && !inList(inpValue, array)){
        console.log(inpValue)
        
        
       
        array.push(inpValue);
        console.log(array)
            
            
        var opt = document.createElement('option');
        opt.text = `Valor ${inpValue} adicionado`
            
        sel.appendChild(opt)
        console.log('Dan')
        inpElement.value = '';
        inpElement.focus()
    }else{
        window.alert("Numero invalido ou Já cadastrado")

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