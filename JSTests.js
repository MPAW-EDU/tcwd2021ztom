

console.log(5-"4");

console.log(5 % 10);

console.log(true + true + true);

console.log();

console.log("a" > 'A');

console.log("b" < "A");

const borderline = [true, true, true]

const redline = borderline.reduce((a,b) => a + b)

if (redline === 3) {
    console.log("Perimeter Breached!");
} else {
    console.log("Perimeter Secure");
}