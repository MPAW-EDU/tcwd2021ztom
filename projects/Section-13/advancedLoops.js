
const basket = ['apples','oranges','grapes'];

/**
 *  For Of  Loop
 * 
 *  itterates through the actual items
 */

for (fruit of basket) {
    console.log(fruit);
}


/**
 *  For In Loop
 * 
 *  enumerates through objects
 */

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
// Itterates indexes
for (fruit in basket) {
    console.log(fruit, basket[fruit]);
}

for (fruit in detailedBasket){
    console.log(fruit);
}