// function declareation
function Square(x: number) {
  return x * x;
}
// calling function
let result = Square(5);
console.log(result); //printing the result

// more about multiple parameters

const doSomethig = (person: string, age: number, action: string) => {}; //its arrow functiom
doSomethig("alex", 22, "engineer");

//default parameters
function greet(person: string = "Stranger"): string {
  return `HI ${person}!`;
}

let msg: string = greet("Rahul");
console.log(msg);

//return type annotations
function t(n: number): number {
  return n * 2;
}
//most of the tym we dont have to menion the return type as ts has inference

function randp(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

//explicitly mentioning the return ttypess
const add = (x: number, y: number): string | number => {
  if (x + y < 15) {
    return x + y;
  }
  return `hi is${x}!+${y}!`;
};
let r = add(56, 5);
console.log(r);

//anonymous function
const colors = ["red", "BLue", "Green"];
const New = colors.map((color) => {
  return color.toUpperCase();
});

console.log(New);
// void function

function justPrint(): void {
  console.log("hiiiii");
  console.log("THIS IS VOID RETURN TYPE");
}
justPrint();
