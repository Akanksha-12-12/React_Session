//Utilities

//Named Exports  (Can have many per file)
export const PI = 3.14159;
export function square (x) {
    return x*x*x;
}


//Default export  (Only one per file)
export default function cube(x){
    return x*x*x;
}