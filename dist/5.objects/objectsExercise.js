"use strict";
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    originalTitle: "CATS DOGS",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
function getProfit(Movie) {
    const t = Movie.boxOffice.grossUS - Movie.boxOffice.budget;
    return t;
}
console.log(getProfit(cats));
//# sourceMappingURL=objectsExercise.js.map