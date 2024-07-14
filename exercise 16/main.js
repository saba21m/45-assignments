"use strict";
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guestList = ["faraz", "umar", "kainat"];
console.log("great news! we found a bigger table");
// unshift use to add at starting of an array
guestList.unshift("nida");
//splice use to add at the middle of an array
guestList.splice(Math.floor(guestList.length / 2), 0, "areesha");
guestList.push("ramisha");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited for dinner party at my place.`);
});
