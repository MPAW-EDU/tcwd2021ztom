
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