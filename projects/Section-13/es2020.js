/**
 *  ES2020
 * 
 * Some new features are:
 *  BigInt
 *  Nullish Coalescing Operator
 *  Optional Chaining  operator
 *  Promise: allSettled
 *  globalThis
 */



/**
 * @function BigInt
 * 
 * @description adding 'n' at the end of a long number will
 *  return the phrase "Big Number". This tells you its a big number
 *  and out of the range of safe numbers due to it's size in memory.
 * 
 * @note You must add an end to both the big number 
 * 
 * It allows you to still perform mathematical operations on numbers
 * that are too large for normal memory space, ie safe number.
 */

console.log(99999998888877777776666600n-1n);



/**
 * @function Nullish, Chaining to see if a value exists
 * @example let weight = my_dogs?.thunder?.weight
 * @description It chains accessors into a turnary to determin step by step if they exist
 */

let will_poke = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
};

let wan_poke = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
};

let weight = will_poke.pikachu.weight

console.log('weight:', weight);

//let weight2 = wan_poke.raichu.weight

//console.log('weight:', weight2);

let weight3 = wan_poke?.pikachu?.weight || 'Weightless'

console.log(weight3);