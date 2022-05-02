/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive = () => this.budget > 1000000;
}
const movie1 = new Movie('Avatar', 'James Cameron', 237000000);
const movie2 = new Movie('Shrek', 'Andrew Adamson', 500000);
console.log(movie1);
console.log(movie1.wasExpensive());
console.log(movie2);
console.log(movie2.wasExpensive());
