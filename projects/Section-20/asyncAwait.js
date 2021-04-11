
// Async Await, ES8, built ontop of promises

// async function fetchUsers() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json()
//     console.log(data);
// } 

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data);
}