somar(10);
function somar(limite) {
    let muiltiplosDe3 = 0;
    let muiltiplosDe5 = 0;

    for(i=0; i <= limite; i++){
        if(i % 3 === 0)
        muiltiplosDe3 += i;
        if(i % 5 === 0)
        muiltiplosDe5 += i;
    }

    console.log(muiltiplosDe3 + muiltiplosDe5);
}