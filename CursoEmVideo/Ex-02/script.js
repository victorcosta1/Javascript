function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/foto_bebe_m.png')
            }
            else if (idade <21){
                img.setAttribute('src', 'img/foto_jovem_m.png')
            }
            else if (idade < 50){
                img.setAttribute('src', 'img/foto_adulto_m.png')
            }else{

                img.setAttribute('src', 'img/foto_idoso_m.png')
            }


        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/foto_bebe_f.png')
            }
            else if (idade <21){

                img.setAttribute('src', 'img/foto_jovem_f.png')
            }
            else if (idade < 50){
    
                img.setAttribute('src', 'img/foto_adulto_f.png')
            }else{

                img.setAttribute('src', 'img/foto_idosoica_f.png')
            }
        }
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}