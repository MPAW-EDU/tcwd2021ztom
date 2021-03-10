
// Advanced Arrays

const array = [1,2,10,16];

const double = []

/**
 *  forEach()
 */
const newArray = array.forEach((num) => {
    double.push(num * 2);
    console.log(num);
});
console.log(double);

/**
 *  map()
 */
const mapArray = double.map((num, index) => {
    return [num *2,index];
});

console.log(mapArray);

/**
 *  filter()
 */
const filterArray = array.filter(num => {
    return num > 5;
});

console.log(filterArray);


/**
 *  reduce()
 */
const reduceArray = array.reduce((accumulator, number) => {
    return accumulator + number
}, 0);

console.log(reduceArray);
