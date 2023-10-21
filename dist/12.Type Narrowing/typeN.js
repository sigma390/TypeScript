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
function chek(x, y) {
    if (x === y) {
        return true;
    }
    else if (x == y) {
        return false;
    }
    else {
        return false;
    }
}
console.log(chek(12, "12"));
function getinfo(media) {
    if ("duration" in media) {
        console.log("its a movie ");
    }
    else {
        console.log("its a TVshow");
    }
}
getinfo({ title: "ashiqui2", duration: 210 });
class school {
    constructor(name, sid) {
        this.name = name;
    }
}
class College {
    constructor(name, usn) {
        this.name = name;
        this.usn = usn;
    }
}
function printDetails(student) {
    if (student instanceof school) {
        console.log(`${student.name} goes to school`);
    }
    else {
        console.log(`${student.name} goes to college`);
    }
}
printDetails({ name: "omkar", usn: 106 });
function isCats(animal) {
    return animal.numlivs != undefined;
}
function Makesound(animal) {
    if (isCats(animal)) {
        console.log("meow meow");
    }
    else {
        console.log("boo boo");
    }
}
Makesound({ name: "rober", numlivs: 5 });
Makesound({ name: "maxx", breed: "Labrodor" });
function guesstheBIRD(bird) {
    switch (bird.kind) {
        case ("eagle"):
            return "eagle";
            break;
        case ("kite"):
            return "kite";
            break;
        case ("sparrow"):
            return "sparrow";
            break;
        default:
            const dontcome = bird;
            break;
    }
}
//# sourceMappingURL=typeN.js.map