// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages : number[] = []
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard:string[][] = [[]]
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name: string;
     price: number;};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const Product : Product[] = [{name:"food",price:10},{name:"foodie",price:11}]
function getTotal(Products:Product[]):number{
    let total:number = 0;
    for(let p of Products){
        total+=p.price;
    }
    return total;

}
console.log(getTotal(Product));