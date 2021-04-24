
const express = require('express');
const bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === ''){
    PORT = 5050;
}


let database = {
    users: [
        {
            id: 123,
            name: 'Sally',
            email: 'ItsSally@gmail.com',
            password: 234567,
            entries: 0,
            joined: new Date()
        },
        {
            id: 234,
            name: 'Guy',
            email: 'YoGuy@gmail.com',
            password: 'hotdog',
            entries: 0,
            joined: new Date()
        }
    ]
}


app.get('/', (req,res) => {
    res.status(200).json(database.users)
})



/**
 *  /sign in, Post
 * returns: success / failure
 */
app.post('/signin', (req,res) => {
    const {email, password} = req.body;

    if (email === database.users[1].email && password === database.users[1].password){
        res.status(200).json("success");
    } else {
        res.status(400).json('error logging in')
    }
})

/**
 *   /register, Post 
 *   returns: post / user
 */
app.post('/register', (req,res) => {
    const id = database.users[database.users.length-1].id + 1
    const {name, email, password} = req.body;
    const joined = new Date();

    const newUser = {
        id : id,
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: joined
    }

    database.users.push(newUser);

    res.status(201).json(database.users[database.users.length-1]);

})

/**
 *  /profile/:userId, get
 *  returns user info
 */
app.get(`/profile/:id`, (req,res) => {
   const { id } = req.params;
   let found = false;
   
   database.users.forEach(user => {
       if (user.id === Number(id)) {
           found = true;
           return res.status(200).json(user)
       }
   })

   if (!found) {
       res.status(400).json('No such user.')
   }

})

/**
 *  /image, put
 *  returns updated user object or data
 */
app.put('/image', (req,res) => {

    const { id } = req.body;
    let found = false;

    database.users.forEach(user => {
        if ( user.id === Number(id) ){
            found = true;
            ++user.entries;
            return res.status(201).json(`Entries Increased ${user.name}: ${user.entries}`)
        }
    })

    if (!found) {
        res.status(400).json('No such user exists.')
    }

})


/**
 *  @function bcrypt
 *  @description Allows us to hash, and compare passwords for authenticaiton
 */

bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your PW DB
});

bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
})

bcrypt.compare("veggie", hash, function(err, res) {
    // res = false
})


app.listen(PORT, () => {
    console.log(`Server Online: http://localhost:${PORT}/`);
})