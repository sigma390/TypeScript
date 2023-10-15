

function merge<T,U>(obj1:T,obj2:U){
    return {
        ...obj1,
        ...obj2,
    };
}

const combination = merge({name:"object1"},{pets:["pappu","lassan","chimtu"]});

// type constraints
type SETS = {
    n1:number;
}

function sum<Y extends SETS>(nu:Y,nu2:Y){
    let sum = nu.n1 + nu2.n1;
    return sum;
}

console.log(sum({n1:4},{n1:6}));

// default tytpes


function emptyArr<T = number>():T[]{
    return [];
}

const empt1 = emptyArr