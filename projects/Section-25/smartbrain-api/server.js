
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === ''){
    PORT = 5050;
}

app.get('/', (req,res) => {
    res.status(200).send('<h1>Get API: Working</h1>')
})



/**
 *  /sign in, Post
 * returns: success / failure
 */

/**
 *   /register, Post 
 *   returns: post / user
 */

/**
 *  /profile/:userId, get
 *  returns user info
 */

/**
 *  /image, put
 *  returns updated user object or data
 */



app.listen(PORT, () => {
    console.log(`Server Online: http://localhost:${PORT}/`);
})