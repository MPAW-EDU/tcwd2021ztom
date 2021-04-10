

/**
 *  Example of setting up a promise.
 */
const promise = new Promise((resolve, reject) => {
    if (true){
        resolve('It Worked');
    } else {
        reject('Error, dun broke');
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
});

const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Is it me you\'re looking for?')
})

/**
 *  Promise.all waits for all promises to be 
 *  resolved before returning the object
 */
Promise.all([promise, promise2, promise3, promise4])
    .then( values => {
        console.log(values);
    })


promise
    .then(result => console.log(`${result}!`))
    .then(result2 => console.log(result2 + '?'))
    .catch(err => console.log(err));

promise2
    .then( res => console.log(res));

promise3
    .then(res => console.log(res))

promise4
    .then(res => console.log(res));