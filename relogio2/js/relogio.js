function carregar(){
var msg = window.document.getElementById('mensagem')
var img = window.document.getElementById('imagem')
var msg2 = window.document.getElementById('mensagem2')
var data = new Date()
var hora = data.getHours()  
msg.innerHTML= 'Agora são' + hora + 'hora'

// mensagem estilizada
    if (hora >=0 && hora < 12){
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = 'Bom dia' 
    } else if(hora >12 && hora <=18){
        img.src = './img/fototarde.png'
        document.body.style.background = '#98460f'
        msg2.innerHTML = 'Boa Tarde'
    } else{
        img.src = './img/fotonoite.png'
        document.body.style.background = '#515154'
        msg2.innerHTML = 'Boa Noite'
    }
}
