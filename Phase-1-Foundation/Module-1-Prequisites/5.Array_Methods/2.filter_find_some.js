const numbers = [1,2,3,4,5,6,7,8,9,10];
const products = [
    {id:1, name:"Laptop", price:1000, instock:true},
    {id:2, name:"Phone",  price:500, instock:false},
    {id:3, name:"Tablet", price:800, instock:true},
    {id:4, name:"Monitor",price:300, instock:true},
];


// Filter
// const test = numbers.filter((num) => console.log(num%2 ==0));


console.log("filter even numbers:",numbers.filter((num) => num%2 ===0),
);                 //[2,4,6,8,10]

console.log(products.filter((products) =>products.instock));


//FIND (SINGLE ELEMENT)
console.log(numbers.find((num) => num % 2 === 0));
console.log(products.find((products) => products.price > 100));

//FINDINDEX (Index of the first element that satisfie the condition)
console.log(numbers.findIndex((num) => num % 2 === 0));
console.log(products.findIndex((product) => product.price > 100));


//SOME (At least one element satisfies the condition)
console.log(numbers.some((num) => num % 2 === 0));
console.log(products.some((products) => product.pricde >100));


//EVERY (All elements satisfy the condition)
console.log(numbers.every((num) => num%2 === 0));
console.log(products.every((products) => products.price >100));



