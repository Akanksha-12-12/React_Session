//REDUCE
const numbers = [1,2,3,4,5];
const  sum = numbers.reduce((accumulator,currentValue) => {
    console.log(`accumulator:${accumulator},currentValue:${currentValue}`);
},0);                                       //0 is the initial value for the total
console.log("sum of numbers:",sum);         //15

const cart =[
    {id:1, Name:"Laptop", Price:1000, Quantity:2},
    {id:2, Name:"Phone", Price:500, Quantity:1},
    {id:3, Name:"Tablet", Price:800, Quantity:3}
];
const totalCost = cart.reduce ((total,item) =>{
    return total + item.price * item.Quantity;

},0);
console.log("Total cost of cart items:",totalCost);         //4900