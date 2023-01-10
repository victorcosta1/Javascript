
function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)

    res.innerHTML = `Sua velocidade atual é de: <strong>${vel}km/h</strong>`
    if(vel > 60) {
        res.innerHTML += '<p>Você está MULTADO por exesso de velocidade</p>'
    }
    res.innerHTML += `<p><strong>Diriga sempre com cinto de segurança!</strong></p>`
}