//2 tipos de funções: Realizar  uma tarefa | Não retorna nada


//Realizar uma tarefa
function dizerNome(){
    console.log('Victor')
}

dizerNome();

function MultplicarPorDois(valor) {
    return valor *2; 
}

//console.log(MultplicarPorDois(5));


//Podemos também aplicar o resultado ao valor de uma variavel
//Aqui por exemplo o resultado de "MultiplicarPorDois" passa a ser guardado na variavel "resultado"

let resultado = MultplicarPorDois(5);
console.log(resultado)