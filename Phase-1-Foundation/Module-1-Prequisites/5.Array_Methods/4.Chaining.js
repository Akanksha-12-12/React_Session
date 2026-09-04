const order = [
    {id:1, Name:"Laptop", Price:1000, Quantity:2, Status:"Pending"},
    {id:2, Name:"Phone",  Price:500, Quantity:1, Status:"Pending"},
    {id:3, Name:"Tablet", Price:800, Quantity:3, Status:"Paid"},
    {id:4, Name:"Monitor",Price:300, Quantity:1, Status:"Pending"},
];

const paidOrdersTotalCost = order
.filter((item) =>item.status === "paid")
.reduce((total,item) => total + item.price * item.Quantity,0)
console.log("total cost of paid others:", paidOrdersTotalCost);