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
