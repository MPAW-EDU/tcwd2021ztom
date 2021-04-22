
const express = require('express');

let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === '') PORT = 5050

const app = express();
app.use((req, res, next) => {
    console.log('<h1>Hello</h1>')
    next();
})

// Replacement for body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let users = [
    {    name: 'Bobby',
        sanity: 'CraiCrai'
    },
]

app.get('/', (req,res) => {
    res.status(200).send('<h1>Testing!!</h1>')
})

app.get('/profile', (req,res) => {
    res.status(200).send(user);
})

app.post('/profile', (req,res) => {
    const {name, sanity} = req.body;

    const newUser = {
        name,
        sanity
    }

    users.push(newUser)

    res.status(200).send(users);
})

app.listen(PORT, () => {
    console.log(`Server Online: http://localhost:${PORT}/`);
})