
// Ways of writing functions

function multiply(a,b) {
    return a * b;
};

const mult = function(a,b){
    return a * b;
};

const add = (a,b) => {
    return a + b;
};

console.log(multiply(5,6));
console.log(add(5,6));
console.log(mult(5,6));

// Parameters, What's defined on the function itself.

// Arguments, What's passed into the function when it's called.