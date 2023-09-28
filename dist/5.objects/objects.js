"use strict";
const dog = {
    name: "rocky",
    breed: "Lab",
    age: 5,
    price: 12000,
};
console.log(dog.price);
console.log(dog.name);
const printName = (person) => {
    return `Hi my name is ${person.first} ${person.last}`;
};
const p1 = {
    first: "omkar",
    last: "Patil",
};
console.log(printName(p1));
const printt = (person) => {
    return `hi my name is ${p1.first} ${p1.last}`;
};
console.log(printt(p1));
let cord = { x: 45, y: 56 };
function findCord() {
    return { x: Math.random(), y: Math.random() };
}
const p2 = {
    first: "Omkar",
    last: "Patil",
    age: 22,
};
printName(p2);
function pt(point) {
    return { x: point.x * 2, y: point.y * 4 };
}
function pt1(point) {
    return { x: point.x * 2, y: point.y * 4 };
}
const obj = {
    x: 10, y: "pappu"
};
//# sourceMappingURL=objects.js.map