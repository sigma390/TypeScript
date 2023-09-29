"use strict";
let agee;
agee = 21;
agee = "22";
agee = true;
let price;
function calcTx(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calcTx(45, 0.1));
console.log(calcTx("$456", 0.20));
const ur = ["hi", 123, true];
const RandomArr = [];
RandomArr.push({ x: 12, y: 56 });
RandomArr.push({ lat: 45, long: 89 });
console.log(RandomArr);
function reply(answer) {
    console.log(`hi my answer is ${answer}`);
}
reply("maaybe");
//# sourceMappingURL=Unions.js.map