//No js tmos 5 tipos de loops que são:

//1. for
//2. While 
//3. do..While
//4. For..in
//5. For..of


//For

 //Var chamado I (index)
for(let i = 0; i < 5; i++){
    console.log('Teste');
}

//Podemos deixar mais interessante utilizando um if para imprimir apenas valores impares

for(let a = 1 ; a < 5; a++){
    if(a % 2 !==0){
        console.log(a)
    }
}



//Laços/Loop While

//While Loop

let i = 5;

while(i >= 1) {
    if(i % 2 !==0){
        console.log(i)
    }

    i--;
}

//Do.. While

do {
    console.log('Digitando...');
}while (i < 10)


//For in

const pessoa = {
   //Key   Value
    nome: 'Victor',
    idade: 25
};
//     key-Value
for(let chave in pessoa){
    console.log(chave, pessoa.nome );
}

const cores = ['Vermelho', 'Azul', 'Verde' ];

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//For of
 