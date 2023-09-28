

// arrays in typescript

const ARR : string[] = ["hi","i","Omkar"];
console.log(ARR[0]);

ARR.push("you are greatest");
console.log(ARR);

// number array :
const numarr : number[] = [];

numarr.push(12);
console.log(numarr);

//another syntax
const bools : Array<boolean> = [];
bools.push(true);
bools.push(false);
console.log(bools);


// array ogf custom type

type cord ={
    x:number;
    y:number;

}

const cordinateArr : cord[] = [];
cordinateArr.push({x:10,y:20});
console.log(cordinateArr);

//multidim arrays

const multi: string[][] = 
[
    ['x','o','x'],
    ['x','x','o'],
    ['x','o','x']
]

console.log(multi);