/*function load(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        foto.innerHTML = <img src = "img/fotoManha.jpg"></img>
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        foto.innerHTML = <img src = "img/fotoTarde.jpg"></img>
        document.body.style.background = '#b9846f'
    } else {
        foto.innerHTML = <img src = "img/fotoNoite.jpg"></img>
        document.body.style.backgroundColor = '#515154'
    }
}*/

function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   

    msg.innerHTML = `Agora são ${hora}hrs.`
    if(hora >= 0 && hora < 12){
        foto.src = "img/fotoManha.jpg"
        document.body.style.background = '#C8A984'

    }else if(hora >= 12 && hora <= 18){
        foto.src = "img/fotoTarde.jpg"
        document.body.style.background = '#A8D3EB'

    }else{
        foto.src = "img/fotoNoite.jpg"
        document.body.style.backgroundColor = '#01171A'
    }
}