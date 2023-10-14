"use strict";
const strarr = [];
const inptele = document.querySelector("#inpt");
console.log(inptele);
inptele.value = "Hii i am hkitty";
const btn = document.querySelector(".btn");
function fname(item) {
    return item;
}
fname(45);
fname("hi");
function random(list) {
    const ele = Math.floor(Math.random() * 10);
    return list[ele];
}
console.log(random([1, 2, 3, 48, 6, 9, 2]));
//# sourceMappingURL=generics.js.map