//Template Literals

//Interpolation with $ {}
const name = "Alice";
const age = 30;
console.log("My Name is"+ name + "and I am" + age + "years old.");
console.log(`My name is $ {name} and I am $ {age} years old.`);


//EXPRESSION
const amount = 1000;
const discount = 0.1   //10/100
console.log(`The final price is $ {amount-amount*discount}`);       //The final price is 900



//MULTIPLE STRINGS
const message = `Hello,
This is a multiline
string.`;
console.log(message);    //Output:Hello,This is a multiline string.



//Ternary Operator
const isloggedIn = true;
const greetings = `Hello, $ {isloggedIn ? "User" : "Guest}!`;
console.log(greetings);     //Output:Hello,User!