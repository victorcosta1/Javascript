//No Js existem alguns tipos de operadores logicos que são:
//Operadores aritimeticos
//Operadores de atribuição
// Operadores de Comparação
//Operadores Logicos
//Operadores Bitwise


//Operadores Aritimeticos: 

//Os operadores aritméticos são utilizados para a realização de cálculos simples em JavaScript. Representam as operações matemáticos básicas de soma, subtração, divisão e multiplicação, além de algumas operações especiais, como o módulo e incremento / decremento. O Módulo é o resto de uma divisão inteira.

// + , - , * , / , **

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);


//Operadores de Incremento e Decremento ++ --

let idade = 18;


//Neste exemplo a incrementação so retrona 19 na proxima linha pois a incrementação foi feita antes do console.log
console.log(idade++);
console.log(idade);

//Caso você queria inverter a ordem deve se adcionar op incremento antes da variavel ex

console.log(++idade)

//A decrementação funciona da mesma forma a unica diferença é que em vez de ADICIONAR ele vai DECREMENTAR +1 


//Operadores de atribuição:

//Um operador de atribuição atribui um valor ao operando à sua esquerda baseado no valor do operando à direita. O operador de atribuição básico é o igual (=), que atribui o valor do operando à direita ao operando à esquerda. Isto é, x = y atribui o valor de y a x.


//      X                 Y
let valorTeclado   =     100;
//              Atrribi.

// Outra forma mais simples de fazer isso seria

valorTecladoGamer += valorTecladoGamer

//Isso seria basicamente a mesma coisa que
//valorTecladoGamer + valorTecladoGamer

//O mesmo serve com o operador - ou seja
//valorTecladoGamer -= valorTecladoGamer


//Operadores de Igualdade
//O operador de igualdade (==), por exemplo, retorna verdadeiro (true), caso os operandos tenham o valor igual, e retornará falso (false), caso sejam diferentes. Observe que para o Javascript não importa se os operandos recebidos pelo operador de igualdade são do mesmo tipo.
//Serve como validação

//Possuimos dois tipos de Operadores que são: 
//Igualdade restrita:


//Retorna True
console.log(1===1)
//Além de comparar o valor ele compara o tipo 



//Aqui por exemplo ele irá retornar FALSE ja que os tipos são diferentes
console.log('1' === 1);

//Já aqui ele ira IGNORAR o TIPO ou seja irá retornar true
console.log('1' == 1)


//Operador Ternário

//O operador ternário JavaScript é o único operador que utiliza três operandos. O operando condition é uma expressão que é avaliada como um valor booleano true ou false . Se a condição for verdadeira, o operador ternário retornará o operando expression_1 , caso contrário, retornará a expression_2 .

let pontos = 100;


//Caso pontos seja maior que 100 o cliente é premium se não é comun
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);


// Operadores Logicos

// São usados para realizar operações lógicas. Elas podem ser do tipo AND, OR e NOT. Os operandos devem ser lógicos, verdadeiro ou falso. Também podem operar sobre expressões lógicas, ou seja, que retornem valores verdadeiro ou falso.


//Aqui por exemplo o resultado seria TRUE já que ambos parametros são true
console.log(true && true)

//Já neste exemplo como somente 1 parametro é true o valor resultante é FALSE
console.log(false && true)



//Operador Logico ou || 
//Retorna true se um dos operandos forem true


let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho


//Ou seja neste exemplo abaixo ele irá retornar true já que um dos operandos será true

let maiorDeIdade2 = false;
let possuiCarteiraDeTrabalho2 = true;
let podeAplicar2 = maiorDeIdade && possuiCarteiraDeTrabalho

console.log(podeAplicar2)

//Operador Not (!)

//NOT em inglês significa não, é a negação. Sempre que colocamos esse operador perto de alguma condição, ele altera o valor dela de verdadeiro para falso (true para false) ou o contrário, de falso para verdadeiro.


let candidatoRecusado = !podeAplicar;




//Comparação logicas não booleanas 

//falsy:
//Undefined, null, 0, false, '', NaN,

//Truthy


let corPersonalizada = 'Vermelho';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão;