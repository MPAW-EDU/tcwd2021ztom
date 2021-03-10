

const first = () => {
    const greet = 'Hi!';
    const second = () => {
        console.log(greet);;
    }
    return second;
};


const newFunc = first();
newFunc();


/**
 *  Closures:
 * 
 *  Children always have access to the parent scope,
 *  but the parent scope doesn't have access to the child.
 */

/**
 *  Currying:
 * 
 *  Making it so a function only accepts one variable
 *  at a time.
 *  Why: to return the remaining function if not all 
 *  vars are provided.
 */
// const multiply = ( a , b ) => a * b;
// const curryingMultiply = (a) => (b) => a * b;
// console.log(curryingMultiply(3));
// console.log(curryingMultiply(3)(4));


/**
 *  Compose:
 *  Able to pass a function or functions along with the data
 *  you want to manipulate.
 * 
 *  Note: This will be particularly useful for utilizing
 *  helper functions.
 */
// const compose = (f , g) => (a) => f(g(a));
// const sum = (num) => num + 1;

// console.log(compose(sum,sum)(5));


/**
 *  Avoid side-effects, have functional purity.
 */
