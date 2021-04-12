
const promiseOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000)
)
const promiseTwo = new Promise((resolve, reject) => 
    setTimeout(reject, 3000)
)

Promise.all([promiseOne, promiseTwo]).then(data=> console.log(data));