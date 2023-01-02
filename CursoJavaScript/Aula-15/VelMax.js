//velocidade max 70km

verificarVelocidade(85) 

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    const kmPorPonto = 5;


    if(velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = math.floor(((velocidade - velocidadeMaxima) /kmPorPonto));
        if (pontos >= 12 ) {
            console.log('Carteira suspensa');

            console.log('Pontos:', pontos);
        }
    }
}