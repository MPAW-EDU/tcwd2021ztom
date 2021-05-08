
const handleSignin = (req, res, db, bcrypt) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json('Incorrect Username or Password.')
    }
    
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
                res.status(400).json('Incorrect Username or Password')
            }
        })
        .catch(err => res.status(400).json('Invalid Username or Password'))
}

module.exports = {
    handleSignin: handleSignin
}