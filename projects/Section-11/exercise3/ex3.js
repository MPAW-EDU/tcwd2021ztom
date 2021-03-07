
let choice
let result
let numOne
let numTwo

while (result == undefined) {
    numOne = Number(window.prompt("Enter the first number: "));
    numTwo = Number(window.prompt("Enter the second numebr: "));
    choice = window.prompt("What would you like to do? [mult,div,add,sub]")

    switch(choice){
        case 'add':
            result = numOne + numTwo;
            break;
        case 'sub':
            result = numOne - numTwo;
            break;
        case 'mult':
            result = numOne * numTwo;
            break;
        case 'div':
            result = numOne / numTwo;
            break;
        default:
            console.log("Unknown Error Has Occurred.");
    }
    result != undefined?console.log(`${result} - Here`):console.log("Invalid Input");

}