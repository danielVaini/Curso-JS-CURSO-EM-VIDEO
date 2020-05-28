function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERROR] verifique os dados e tente novamente');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value)
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 10){

            }else if(idade < 21){

            }else if(idade < 50){
                
            }else{

            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){

            }else if(idade < 21){

            }else if(idade < 50){

            }else{
                
            }
        }
        
    }
}