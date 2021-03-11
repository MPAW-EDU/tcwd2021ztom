

// Primitives types pass by value

let a = 5;
let b = a;

b++;

console.log(b);

/** Assigning an object this way only creates
 *  a pointer to a memory space.
*/
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;
obj1.password="Moooo";

console.log(obj1);

/**
 *  Using concat to copy an array makes
 *  a deep copy and not a pointer.
 */

let c = [1,2,3,4,5];
let d = [].concat(c);

d.push(1294850);
console.log(c);
console.log(d);


let obj3 = {a: 'a', b: 'b', c: {super: "Trooper"}};
let clone1 = Object.assign({}, obj3)
let clone2 = {...obj3}
let superClone = JSON.parse(JSON.stringify(obj3));
obj3.c = 10;
clone2.c = 100


console.log(obj3);
console.log(clone2);
console.log(superClone);