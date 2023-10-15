


function tripple(item:(string | number)):(string|number){
    if (typeof item == 'string') {
        return item.repeat(3);
    }
    return item*3;
}


console.log(tripple(45));
console.log(tripple("hii"));

//truthness guard

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
