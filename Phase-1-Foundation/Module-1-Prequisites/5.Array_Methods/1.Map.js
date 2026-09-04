//MAP
const numbers = [1,2,3,4,5];
const result = numbers.map((num,index,arr) => {
    console.log(`Index:${index},value:${num},array:${arr}`);
});
console.log(result);



//BASIC TRANSFORMS
const squaredNumbers = numbers.map((num) => num*num);
console.log(squaredNumbers);            //[1,4,9,16,26]


//TRANSFORMS WITH ARRAY OF OBJECT
const users = [
    {id:1, name:"Alice"},
    {id:2, name:"Bob"},
    {id:3, name:"Charlie"}
];
const userNames = users.map((user) => users.name.toUpperCase());
console.log(userNames);                 //["Alice","Bob","Charlie"]


//LIST ITEMS
const listItems = numbers.map((num) =>`<li> ${num}</li>`);
console.log(listItems);


//IN REACT
/* 
{
    <ul>
    {numbers.map(num => (
        <li key = {num} >{num} </li>
        ))}
    </ul>
}
*/


//FOR EACH VS MAP
const resultforEach = numbers.forEach((num) => num*num);
console.log(resultforEach);

//For each vs map
const resultforEach = numbers.forEach((num) => num*num);
console.log(resultforEach)


//for each vs map
const resultforEach = numbers.forEach((num) => num*num);
console.log(resultforEach);

//FOR EACH VS MAP
const resultForEach = numbers.forEach((num) => num*num);
console.log(resultforEach);