function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var fot = window.document.getElementById('msg1');
    msg.innerHTML = `Agora são ${hora} horas`;
   
    
    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = 'Manha.png';
        document.body.style.background = '#e2cd9f';
        fot.innerHTML = 'Bom dia';
    } else if (hora >= 12 && hora <= 18){
        // Boa tarde
        img.src = 'Tarde.png';
        document.body.style.background = '#b9846f';
        fot.innerHTML = 'Boa Tarde';
    }else{
        // Boa noite
        img.src ='Noite.png';
        document.body.style.background = '#515154'
        fot.innerHTML = 'Boa noite'
    }
}


