let guestList :string[]= ["nida","areesha","kainat","ramisha","farnaz","umar"];
console.log("unfortunately I can only invite 2 person due to the not arrival of the table");
//removing members from list one by one
while (guestList.length > 2){
    let removedGuest : string | undefined = guestList.pop();
    if (removedGuest !== undefined){
        console.log(`sorry ${removedGuest}, I cant invite you.`);
    }
};
guestList.forEach (guest => {
    console.log(`Dear ${guest}, you are still invited for the dinner`);
});
// removing remaing 2 persons from array
guestList.splice(0,guestList.length);
console.log("updated list of guest :",guestList);


