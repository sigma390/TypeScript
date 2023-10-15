"use strict";
function fnamee(item) {
    return item;
}
fnamee(45);
fnamee("hi");
function randomm(list) {
    const ele = Math.floor(Math.random() * 5);
    return list[ele];
}
let c1 = {
    name: "pussy",
};
let c2 = {
    name: "mani",
};
let c3 = {
    name: "boka",
};
class drive {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
let catarr = [c1, c2, c3];
console.log(randomm([1, 2, 3, 48, 6, 9, 2]));
console.log(randomm(["hi", "i am", "omkar"]));
console.log(randomm(catarr));
//# sourceMappingURL=genericfxn.js.map