// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name:string = "saba Mughal";
console.log("lowerCase:", name.toLowerCase());
console.log("upperCase:", name.toUpperCase());
console.log("titleCase:", name.replace(/\b\w/g,c=> c.toUpperCase()));