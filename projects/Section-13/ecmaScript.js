
// ECMA Information

// ECMAScript === Javascript



/*
    Let and Const
*/

// const player = 'Bobby';
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90){
//     wizardLevel = !wizardLevel;
// }

// console.log(wizardLevel);

// const obj = {
//     player: "Bobby",
//     experience: 100,
//     wizardLevel: false
// }

// console.log(obj);

// obj.wizardLevel = true;

// console.log(obj.wizardLevel);

// const player = obj.player;
// const experience = obj.experience;
// const wizardLevel = obj.wizardLevel;

// const { player, experience } = obj;

// console.log(player, experience);

// let { wizardLevel } = obj;

// console.log(wizardLevel);


// const name = 'John Snow';

// In ES6 you can have dynamic names for key-pairs
// const player = {
//     [name]: 'Hello',
//     [`Ray Smith`]: 'Hihi'
// }


// Template Strings

// const age = 34;
// const pet = 'horse';

// const greeting = `Hello ${name}, you seem to doing well!`
// console.log(greeting);


// const greetingBest = `Hello ${name} you have a nice ${pet}.`;
// console.log(greetingBest);


// Symbols create a unique type or object.
// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo')


/**
 *  Arrow Functions
 * 
 *  This way automatically returns, without the return statement.
 */

const add = (a,b) => a + b ;