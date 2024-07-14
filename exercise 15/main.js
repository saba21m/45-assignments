"use strict";
let guestList = ["alishba", "faraz", "umar"];
let notInvited = guestList.splice(0, 1)[0];
console.log(`${notInvited} sorry you are not invited for dinner`);
guestList.push("kainat");
guestList.forEach(guest => {
    console.log(`Dear ${guest} you are invited for my dinner party at my place.`);
});
