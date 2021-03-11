
// String Padding
// .padStart()
// .padEnd()

const animal = 'Turtle';

// Supposedly applied padding to either the front or back.
console.log(animal.padStart());
console.log(animal.padEnd());


const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4)


Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}

console.log(obj);


// Ability to itterate via keys from an object
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})


Object.values(obj).forEach(values => {
    console.log(values);
})


/**
 *  Scenario
 */
Object.entries(obj).map(value => {
    console.log(`${value[1]} ${value[0].replace('username','')}`);
    return `${value[1]} ${value[0].replace('username','')}`
})


/**
 *   Asyn Await
 */