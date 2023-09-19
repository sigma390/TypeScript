const dog = {
  name: "rocky",
  breed: "Lab",
  age: 5,
  price: 12000,
};

console.log(dog.price);
console.log(dog.name);

//passing object to a function

const printName = (person: { first: string; last: string }) => {
  return `Hi my name is ${person.first} ${person.last}`;
};
const p1 = {
  first: "omkar",
  last: "Patil",
};
console.log(printName(p1));

//more about object typess
let cord: { x: number; y: number } = { x: 45, y: 56 };

//function returning object
function findCord(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

//excess parameters trap

//1. invalid case
// printName({ first: "omkar", last: "patil", age: 22 }); //invalid

//but
const p2 = {
  first: "Omkar",
  last: "Patil",
  age: 22,
};
printName(p2); //valid

//type aliasing

function pt(point: { x: number; y: number }): { x: number; y: number } {
  return { x: point.x * 2, y: point.y * 4 };
}

//using aliasing
type pointy = {
  x: number;
  y: number;
};
function pt1(point: pointy): pointy {
  return { x: point.x * 2, y: point.y * 4 };
}

//both functions yeild same output
