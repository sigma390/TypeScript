"use strict";
function twoFer(name = "you") {
    return `one for ${name},one for me`;
}
console.log(twoFer("Omkar"));
console.log(twoFer());
function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2019));
const leapyear = (year) => {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(leapyear(2010));
console.log(leapyear(2020));
//# sourceMappingURL=functionsExercise.js.map