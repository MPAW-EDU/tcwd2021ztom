
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


const register = require('./controllers/register');


let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === ''){
    PORT = 5050;
}


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'michael',
        password: '',
        database: 'smart-brain'
    }
});

// db.select('*').from('users').then(data => {
//     console.log(data);
// })



app.get('/', (req,res) => {
    res.status(200).json(database.users)
})



/**
 *  /sign in, Post
 * returns: success / failure
 */
app.post('/signin', (req,res) => {
    const {email, password} = req.body;
    
    db.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash);
            if(isValid) {
                return db
                    .select('*')
                    .from('users')
                    .where('email', '=', email)
                    .then( user => {
                        res.status(200).json(user[0]);
                    })
                    .catch(err => res.status(400).json('Error fetching user data'))
            } else {
                res.status(400).json('Invalid Username or Password')
            }
        })
        .catch(err => res.status(400).json('Invalid Username or Password'))
})

/**
 *   /register, Post 
 *   returns: post / user
 */
app.post('/register', (req,res) => { register.handleRegister(req, res, db, bcrypt) });

/**
 *  /profile/:userId, get
 *  returns user info
 */
app.get(`/profile/:id`, (req,res) => {
   const { id } = req.params;
   
   db
    .select('*').from('users').where({id})
    .then( user => {
        if (user.length){
            res.status(200).json(user[0]);
        } else {
            res.status(400).json('User Not Found')
        }
    })
    .catch(err => res.status(400).json('Error getting user'))
})

/**
 *  /image, put
 *  returns updated user object or data
 */
app.put('/image', (req,res) => {

    const { id } = req.body;

    db('users')
        .where('id','=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.status(200).json(entries[0]);
        })
        .catch(err => res.status(400).json('Unable to get entries'))

})


/**
 *  @function bcrypt
 *  @description Allows us to hash, and compare passwords for authenticaiton
 */

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your PW DB
// });

// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// })

// bcrypt.compare("veggie", hash, function(err, res) {
//     // res = false
// })


app.listen(PORT, () => {
    console.log(`Server Online: http://localhost:${PORT}/`);
})