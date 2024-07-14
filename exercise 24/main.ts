// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// creating variable
let stawberry = "stawberry";

// test for equality
console.log("stawberry is equal to stawberry");
console.log(stawberry=="stawberry");

//test for inequality
console.log("stawberry is not equal to stawberry");
console.log(stawberry!== "stawberrry");

//test using lower case function
let upperCasestawberrry = "STAWBERRY"

//equal to
console.log("STAWBERRY is equal to stawberry after converting to lower case ");
console.log(upperCasestawberrry.toLowerCase()== "stawberry");
//not equal to
console.log("STAWBERRY is not equal to stawberry after converting to lower case ");
console.log(upperCasestawberrry.toLowerCase()!== "stawberry");

//numerical test equality and in equality
let ten =10;
let twenty = 20;
// equal to
console.log("ten is equal to twenty");
console.log(ten == twenty);

//not  equal to
console.log("ten is not equal to twenty");
console.log(ten !== twenty);

// greater then
console.log("twenty is greater then ten");
console.log(twenty > ten);

// less then
console.log("twenty is less then ten");
console.log(twenty < ten);

//greater then or equal to
console.log("twenty is greater then  or equal to ten");
console.log(twenty >= ten);


// less thenor equal to
console.log("twenty is less then or equal to ten");
console.log(twenty <= ten);

//test using "&"" and "or" operator
//using && (and) operator
console.log("twenty is not equal to ten and twenty is greater then ten");
console.log(twenty !== ten && twenty > ten);

//using  || (or) operator
console.log("twenty is not equal to ten or ten is greater then twenty");
console.log(twenty !== ten || ten > twenty);

//test weather an item is in a array
let fruits =["apple", "mango","orange"];
console.log("orange is include in my fruit array");
console.log(fruits.includes("orange"));

//test weather an item is not in a array
console.log("orange is  not include in my fruit array");
console.log(!fruits.includes("orange"));





