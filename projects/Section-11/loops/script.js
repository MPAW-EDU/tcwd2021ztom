
let todo = [
    "Clean up",
    "Shower",
    "Brush Teeth",
    "Push Code",
    "Study Math"
];

for (let i = 0; i < todo.length; i++){
    console.log(todo[i]);
    todo[i] = `${todo[i]}!`
    console.log(todo[i]);

}

for (item of todo) {
    console.log(item);
    item = `${item}!`
    console.log(item);

}

let run = false;

while (run){
    console.log("Run Run");
}

do {
    console.log("Run, Run, Run");
} while (run)


// Can pass a function into a .forEach, so long as the funciton takes in two variables
// it will automatically be passed the item and it's index location.
function logTodos(todo, i) {
    console.log(todo, i);
}

todo.forEach(logTodos)