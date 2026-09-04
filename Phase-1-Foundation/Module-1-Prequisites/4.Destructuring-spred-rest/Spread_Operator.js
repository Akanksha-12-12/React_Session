//ARRAYS
//Combine
const arr1 = [1,2,3];                   //xyz
const arr2 = [4,5,6];
const arr2 = ([...arr1, ...arr2]);      //[1,2,3,4,5,6]


//COPY
const arr3 = [...arr1];
console.log(arr3);                      //1,2,3


//INSERT ELEMENT
const arr4 = [0,...arr1, 1];
console.log(arr4);                      //[0,1,2,3,1]




//OBJECT
//Combine
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {...obj1, ...obj2};
console.log(obj3);                      //{a:1, b:2, c:3, d:4}


//COPY
const obj4 = {...obj1};
console.log(obj4);                      //{a:1, b:2}


//INSERT PROPERTIES
const user = {name:"John Doe"};
const userWithAge = {...user, age:30};
console.log(userWithAge);                  //{name:"John Doe"}   


//REST OPERATORS
const props = {
    variant : "Primary",
    size : "lg",
    disabled : false,
    oncliclick : () => console.log("Button Clicked"),
};
const { variant,size, ...restprop} = props;

console.log("variant", variant);            //primary
console.log("size",size);                   //LG
console.log("restprops",restprop);          //{disabled:false ; onclick[function:onclick]}


//FUNCTIONS
function greet (greeting , name, ...names){
    console.log("greeting",greeting);
    console.log("name",name);
    console.log("names",names);
    return `${greeting} ${name} ${names.join("")}`
}
console.log(greet("Hello", "Good Morning", "Akanksha", "Patil"));



//ARRAYS
const [ red,...othercolors] = rgb;
console.log("red",red);                     //255
console.log("othercolors",othercolors)      //[200,0]







