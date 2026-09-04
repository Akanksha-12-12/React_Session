//OBJECT DESTRCTURING
const user = {
    name:"John Doe",
    age:30,
    address:{
        street:"123 Main street",
        city:"Anytown",
        country:"USA",
    },
};
console.log("age dot notation",user.age);
console.log("age bracket notation",user["age"]);


//BASIC OBJECT DESTRUCTURING
const{name,age,address} =user;
console.log("name",name);                    //John Doe
console.log("age",age);                      //30
console.log("address",address);             //{street:123 Main street}


//NESTED OBJECT DESTRUCTURING
const {address: {street,city,country}} =user;
console.log("street",street);               //123 main street...
console.log("city",city);                   //Anytown
console.log("country",country);             //USA


//RENAME PROPERTY
const {name:userName} =user;
console.log("userName",userNmae);           //John Doe
console.log("name",name);                   //John Doe


//DEFAULT VALUES(US EONLY WHEN THE PROPERTY IS DEFINED)
const {role ="guest", verified =false} =user;
console.log("role", role);
console.log("verified", verified);



//FUNCTION PARAMETER DESTRUCTURING
function displayUserInfo ({name,age,adress: {street,city,country} }) {
return `name: ${name}, Age: ${age}, adress: ${street}, ${city}, ${country}`;
}
console.log(displayUserInfo(user));