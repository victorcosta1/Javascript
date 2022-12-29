//If... else

//Se a hora estiver entre 6:00 até 12:00 : Bom dia!
//Se estiver entre 12:00 até 18:00 : Boa tarde!
//Caso contrário : Boa noite!

let hora = 10;


//Se
if (hora > 6 && hora < 12) {
    console.log("Bom dia!")
}
//Se não
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!")
}
//Caso Contrario
else{
    console.log("Boa noite!")
}

//Switch case

let permissao;//comum , gerente e diretor

switch(permissao) {
    case 'comum': 
       console.log('Usuário comum');
       break;

    case 'gerente':
        console.log('Usuário Gerente');
        break;

    case 'diretor':
        console.log('Usuário Diretor');
        break;
    
    default: 
    console.log('User not defined');
}