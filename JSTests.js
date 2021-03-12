

// console.log(5-"4");

// console.log(5 % 10);

// console.log(true + true + true);

// console.log();

// console.log("a" > 'A');

// console.log("b" < "A");

// const borderline = [true, true, true]

// const redline = borderline.reduce((a,b) => a + b)

// if (redline === 3) {
//     console.log("Perimeter Breached!");
// } else {
//     console.log("Perimeter Secure");
// }

let a = 3;
let b = 1;
let array = [1,3,4,2,6]

const swap = (array, a, b) => {
    const temp = array[a]
    array[a] = array[b];
    array[b] = temp;
    return array
}

console.log(swap(array,a,b));

// Changed Local Themes, experimenting with new configurations