"use strict";
function Square(x) {
    return x * x;
}
let result = Square(5);
console.log(result);
const doSomethig = (person, age, action) => { };
doSomethig("alex", 22, "engineer");
function greet(person = "Stranger") {
    return `HI ${person}!`;
}
let msg = greet("Rahul");
console.log(msg);
function t(n) {
    return n * 2;
}
function randp(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
const add = (x, y) => {
    if (x + y < 15) {
        return x + y;
    }
    return `hi is${x}!+${y}!`;
};
let r = add(56, 5);
console.log(r);
const colors = ["red", "BLue", "Green"];
const New = colors.map((color) => {
    return color.toUpperCase();
});
console.log(New);
function justPrint() {
    console.log("hiiiii");
    console.log("THIS IS VOID RETURN TYPE");
}
justPrint();
//# sourceMappingURL=functions.js.map