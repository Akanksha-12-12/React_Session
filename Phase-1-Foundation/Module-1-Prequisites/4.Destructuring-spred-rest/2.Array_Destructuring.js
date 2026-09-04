//ARRAY DESTRUCTURING
const rgb  = [255,200,0];
console.log(rgb[0]);
console.log(rgb[1]);
console.log(rgb[2]);


//BASIC ARRAY DESTRUCTURING
const [red, green, blue] = rgb;
console.log("red",red);             //255
console.log("green",green);         //200
console.log("blue",blue);           //0



//SKIP ELEMENT
const [,,blue] = rgb;
console.log("blue",blue); 


//REST 
const [red,...othercolors] =rgb;
console.log("red",red);                      //255
console.log("othercolors",othercolors);      //[200,0]


//DEFAULT
const [red,green,blue,alpha = 1] = rgb;
console.log("red",red);             //255
console.log("green",green);         //200
console.log("blue",blue);           //0
console.log("alpha",alpha);         //1


//SWAPPING VALUES
let a = 1;
let b = 2;
console.log("Before swapping : a = ", a, "", b = "",b);

[a,b] = [b,a]       //Bwefore Swapping a=1, b=2

console.log("After swapping : a = ", a ,",b = ",b); //After Swapping a=2 b=1



