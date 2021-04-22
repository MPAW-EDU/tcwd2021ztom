
const express = require('express');

let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === '') PORT = 5050

const server = express();

const user = {
    name: 'Bobby',
    sanity: 'CraiCrai'
}

server.get('/', (req,res) => {
    res.status(200).send(user)
})

server.listen(PORT, () => {
    console.log(`Server Online: http://localhost:${PORT}/`);
})