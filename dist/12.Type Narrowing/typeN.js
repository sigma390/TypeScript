"use strict";
function tripple(item) {
    if (typeof item == 'string') {
        return item.repeat(3);
    }
    return item * 3;
}
console.log(tripple(45));
console.log(tripple("hii"));
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("Not a String!!!!");
    }
};
printLetters("HIII");
//# sourceMappingURL=typeN.js.map