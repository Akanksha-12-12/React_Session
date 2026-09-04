//LET-CONST-VAR

//CONST (Cannot Reassign)
const pi = 3.14;
pi = 3.14159      //This will throw error because pi value is constant and cannot be reassigned
                  //Uncaught TypeError:Assignment to constant variables



//LET   (Can be Reassign)
let radius = 5;
radius = 10;            //This is allowed because radius is declared with let and can be reassigned
console.log(radius);    //output=10

//Block scope example
{
    const message = "Hello, World!";
    console.log("Inside block",message);        //output=Hello, World!   
}
console.log("Outside block",message);           //Uncaught Referance Error:message is not defined


function testscope(){
    if (true){
        let localVar = "I am local to this block";
        console.log((localVar))     //Output = I am local to this block
    }
    return localVar;                 //Uncaught Referance Error:localVar is not defined
}
//console.log("outside function",localVar);
//console.log(testscope());



//VAR
//var pollutes the global object model in non-module script

var x = 1;
console.log(x);
console.log(window.x)       //output:1 (In browser var declarations are added to global object)


//RULE OF THUMB = Default to const, Use let only whwn you need to Reassign..Avoid Var.