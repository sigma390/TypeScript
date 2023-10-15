"use strict";
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combination = merge({ name: "object1" }, { pets: ["pappu", "lassan", "chimtu"] });
function sum(nu, nu2) {
    let sum = nu.n1 + nu2.n1;
    return sum;
}
console.log(sum({ n1: 4 }, { n1: 6 }));
function emptyArr() {
    return [];
}
const empt1 = emptyArr;
//# sourceMappingURL=GenMultitype.js.map