// interfaces

// type Person = {
//     x:string;
//     y:string;
// }

//Methods and interfaces
interface Person {
  readonly id: string;
  first: string;
  last: string;
  age?: number;
  sayHi: () => string;
}

const thomas: Person = {
  id: "21cs45",
  first: "thomas",
  last: "Wayne",
  age: 45,
  sayHi() {
    return `Hi i am ${thomas.first} ${thomas.last}`;
  },
};

console.log(thomas.sayHi());
// method paarameters
interface item {
  name: string;
  price: number;
  addDiscount(disc: number): number;
}
const gross: item = {
  name: "potato",
  price: 45,
  addDiscount(disc) {
    let benefit: number = this.price - disc * this.price;
    return benefit;
  },
};
console.log(gross.addDiscount(0.1));

//reopening interface to add propertiess

interface dog {
  name: string;
}

interface dog {
  age: number;
}
interface dog {
  breed: string;
  bark(): string;
  walk: () => string;
}
const dd: dog = {
  name: "rocky",
  age: 12,
  breed: "lab",
  bark() {
    return `${this.name} says booo booo!!!!`;
  },
  walk: () => {
    return `dog is walking`;
  },
};
console.log(dd.walk());

//extending interfaces

interface serviceDog extends dog {
  job: "drug dog" | "policedog";
}

const chewy: serviceDog = {
  name: "chewy",
  age: 4,
  breed: "lab",
  bark() {
    return `${chewy.name} is Barking`;
  },
  walk() {
    return "chewy walking";
  },
  job: "drug dog",
};

// =====>      multiple interface extention   <=====

interface man {
  name: string;
}
interface employe {
  id: string;
}
//use of enum
enum le {
  lvl0 = 0,
  lvl1,
  lvl2,
}

interface Engineer extends man, employe {
  level: le;
  experience: number;
}
const pappu: Engineer = {
  name: "pappu",
  id: "45",
  level: le.lvl0,
  experience: 12,
};
console.log(pappu.level);
