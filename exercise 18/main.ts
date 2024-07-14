// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placeToVisit :string[] = ["Canada","Maldeeves","US","Turkey","Paris"];
//printing in orignal order
console.log("orignal order:",placeToVisit);

//printing in alphabetical order
console.log("alphabetical order:",placeToVisit.slice().sort());

// aray is still in orignal condition 
console.log("orignal order:",placeToVisit);

//Printing array in reverse alphabetical order
console.log("reverse alphabetical order:",placeToVisit.slice().sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log("orignal order after reverse sort:",placeToVisit);

//Reverse the order of your list.
placeToVisit.reverse();
console.log("reverse order:",placeToVisit);

//Reverse the order of your list again.
placeToVisit.reverse();
console.log("back to orignal order:",placeToVisit);

//sorting it in alphabetical order again
console.log(" sorted alphabetical order:",placeToVisit.slice().sort());

//sorting array in reverse alphabetical order again
console.log("sorted reverse alphabetical order:",placeToVisit.slice().sort().reverse());
