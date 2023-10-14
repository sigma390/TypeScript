//generic fxns


function fnamee<Type>(item:Type):Type{
    return item;
}

fnamee<number>(45)
fnamee<string>("hi")

//own generic fxn
function randomm<T>(list:T[]):T{
    const ele = Math.floor(Math.random()*5);
        return list[ele];
    
}
//cats array
type cat ={
    name:string;
}

let c1:cat={
    name:"pussy",
};
let c2:cat={
    name:"mani",
};
let c3:cat={
    name:"boka",
};
let catarr:cat[] = [c1,c2,c3]
console.log(randomm<number>([1,2,3,48,6,9,2])); //example of number
console.log(randomm<string>(["hi","i am","omkar"])); //example of stirng
console.log(randomm<cat>(catarr));//example of type cat