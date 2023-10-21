


function tripple(item:(string | number)):(string|number){
    if (typeof item == 'string') {
        return item.repeat(3);
    }
    return item*3;
}


console.log(tripple(45));
console.log(tripple("hii"));

//1.truthness guard

const printLetters = (word?:string)=>{
    if(word){
        for (let char of word) {
            console.log(char);
            
        }
    }else{
        console.log("Not a String!!!!");
    }
}

printLetters("HIII");


//2.Euqality Narrowing

//diff between == and === 

function chek(x:(number |string) , y:(string | boolean)):boolean{
    if (x === y) {
        return true;
    }
    else if(x == y){
        return false;
    }
    else{
        return false;
    }

}

console.log(chek(12, "12"))

//3.in operator narrowing


interface movies {
    title:string,
    duration:number
}

interface TVshow {
    title:string,
    noofepisodes:number
}


function getinfo(media:movies | TVshow ){
    if ("duration" in media) {
        console.log("its a movie ");
        
    }
    else{
        console.log("its a TVshow");
    }
}

getinfo({title:"ashiqui2",duration:210});

//4.INSTANCEOF

class school{
    constructor(public name:string, sid:number){}
}

class College{
    constructor(public name:string, public usn:number){}
}

function printDetails(student:school | College){
    if (student instanceof school) {
        console.log(`${student.name} goes to school`);
    }
    else{
        console.log(`${student.name} goes to college`);
    }

}

printDetails({name:"omkar",usn:106})

//5.predicates

interface cats{
    name:string;
    numlivs:number;
}

interface dogs{
    name:string;
    breed:string;
}

function  isCats(animal:cats | dogs):animal is cats {
    return (animal as cats).numlivs !=undefined;
}

function Makesound(animal:cats|dogs):void{
    if (isCats(animal)) {
        console.log("meow meow");
        
    }
    else{   
        console.log("boo boo");
    }
}

Makesound({name:"rober",numlivs : 5 });
Makesound({name:"maxx",breed : "Labrodor" });


//6.Discreminated unions

interface eagle{
    name:string;
    kind:"eagle"
}
interface kite{
    name:string;
    kind:"kite"
}
interface sparrow{
    name:string;
    kind:"sparrow"
}

function guesstheBIRD(bird: eagle | kite | sparrow){
    switch (bird.kind) {
        case ("eagle"):
            return "eagle";
            break;
        case ("kite"):
            return "kite";
            break;
        case ("sparrow"):
            return "sparrow";
            break;
    
        default:
            const dontcome:never = bird;
            break;
    }
} 