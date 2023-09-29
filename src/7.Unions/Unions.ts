//unions 

let agee : number | string | boolean ;
agee = 21;
agee = "22";
agee = true;

type point = {
    x:number;
    y:number;

}

type loc = {
    lat:number;
    long:number;
}
//use  of union in function
let price :string| number;
function calcTx(price :string|number,tax:number){
    if (typeof price === "string") {
        price = parseFloat(price.replace("$",""))
    }
    return price*tax;
}

console.log(calcTx(45,0.1));
console.log(calcTx("$456",0.20));


// array of union types

const ur:(string|number|boolean)[] = ["hi",123,true];


const RandomArr :(point|loc)[] = [];
RandomArr.push({x:12,y:56});
RandomArr.push({lat:45,long:89})
console.log(RandomArr)


//literals types


function reply(answer: "yes"|"no"|"maaybe"){
    console.log(`hi my answer is ${answer}`) ;
}
reply("maaybe")