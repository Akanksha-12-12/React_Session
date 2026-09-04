//Promise State
//1.Pending    = Initial State, neither fullfilled nor rejected
//2.Fullfilled = The Operation completed Succesfully
//3.Rejected   = The Operation Failed

const promise = new Promise ((resolve, reject) => {
     setTimeout (() => {
        const Success = false;            //Change this to false test rejected
        if (Success) {
            resolve ("Promise resolved succesfully!");
        } else{
            reject ("Promise Rejected!");
        }
     } ,1000);
    });


//Consume with Then, Catch and Finally
Promise 
    . then((message) => {
        console.log(message);
    })

    . Catch((error) => {
        console.error(error);
    })

    .finally(() => {
        console.log("Promise has been setteled(either fullfilled or rejected).");
    });



//Async_Await.js
function getuser (id) {
    setTimeout (() => resolve({id,name:"John Doe"}),500)
};

//Normal Function
async function loadUser (id) {
    try {
        loading = true;
        const user = await getuser(id);
        console.log("User,user");    
    }catch(err) {
        console.log(err.message);
    }finally{
        loading = false;
    }
}
loadUser(1);


//Fetch Data.js
async function getTodo (id) {
    const rest = await fetch('https://jsonplaceholder.typicode.com/todos/${id}');
return Data;
}
//console.log("getTodo",getTodo(4));

async function loadTodo(id) {
    try{
        const todo = await getTodo(id);
        console.log("todo,todo");
    } catch(error) {
        console.log(error.message);
    } finally {
        console.log("done");
    }
}
loadTodo(4)



