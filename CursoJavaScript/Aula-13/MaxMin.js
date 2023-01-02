//Escreva uma função que use 2 valores e retorne o maior entre eles


//     if (a >= b){
//         console.log(a) 
//     }
//     else console.log(b)

// console.log()


let valorMaior = max(55, 9)
console.log(valorMaior);

function max(num1, num2) {
    if(num1 > num2)
        return num1;
    return num2;
}