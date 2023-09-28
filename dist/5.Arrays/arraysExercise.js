"use strict";
const ages = [];
var gameBoard = [[]];
const Product = [{ name: "food", price: 10 }, { name: "foodie", price: 11 }];
function getTotal(Products) {
    let total = 0;
    for (let p of Products) {
        total += p.price;
    }
    return total;
}
console.log(getTotal(Product));
//# sourceMappingURL=arraysExercise.js.map