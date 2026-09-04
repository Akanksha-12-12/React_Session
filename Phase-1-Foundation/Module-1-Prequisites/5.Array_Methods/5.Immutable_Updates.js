const todos = [
    {Id:1, Task:"Learn Javascript", Completed:True},
    {Id:2, Task:"Learn React", Completed:False},
    {Id:3, Task:"Build a Project", Completed:False},   
];


//CRUD - Create, Read, Update, Delete

//Create a New Todo
function addTodo (todos,newTodo) {
    return [...todos, newTodo];
}
const newTodo = {Id:4, Task:"Learn Node.js", Completed:True};
console.log("Updated Todos after adding:", addTodo (todos,new todo));



//Update a todo
function UpdateTodo(todos,UpdateTodo){
    return todos.map((todo) =>
        todo.id === updatedTodo.id ? {...todo,...updatedTodo} :todo,
);
}

console.log(
    "Updated Todos after updating:",
    UpdateTodo(todos, {Id:4, Task:"Learn Node.js", Completed:True}),
);


//Delete a todo
function deleteTodo (todos,todoId) {
    return todos.filter((todo) => todo.id !==todoId);
}
console.log("Updated Todos after deleting:",deleteTodo(todos,1));


//Find a todo
function findTodo (todos,todoId) {
    return todos.find((todo) => todo.id === todoId);
}
console.log("Found Todo:", findTodo(todos,2));
