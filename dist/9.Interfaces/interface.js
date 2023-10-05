"use strict";
const thomas = {
    id: "21cs45",
    first: "thomas",
    last: "Wayne",
    age: 45,
    sayHi() {
        return `Hi i am ${thomas.first} ${thomas.last}`;
    },
};
console.log(thomas.sayHi());
const gross = {
    name: "potato",
    price: 45,
    addDiscount(disc) {
        let benefit = this.price - disc * this.price;
        return benefit;
    },
};
console.log(gross.addDiscount(0.1));
const dd = {
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
const chewy = {
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
var le;
(function (le) {
    le[le["lvl0"] = 0] = "lvl0";
    le[le["lvl1"] = 1] = "lvl1";
    le[le["lvl2"] = 2] = "lvl2";
})(le || (le = {}));
const pappu = {
    name: "pappu",
    id: "45",
    level: le.lvl0,
    experience: 12,
};
console.log(pappu.level);
//# sourceMappingURL=interface.js.map