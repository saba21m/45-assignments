"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magician) {
    return magician.map(name => `The great ${name}`);
}
let magician_names = ["Ali", "Osama", "Asif"];
let copy_magicians_names = magician_names.slice();
let copy_great_magicions = make_great(copy_magicians_names);
console.log("\norignal array\n");
show_magicians(magician_names);
console.log("\ncopied array\n");
show_magicians(copy_great_magicions);
