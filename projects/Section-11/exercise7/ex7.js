

const database = [
    
]

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    getUser(self) {
        return {'username': this.username, 'password':this.password}    
    }
}

// const u123 = new user("Mike","12345678");
// const u234 = new user("Helba","23456789");

// database[0] = u123.getUser()
// database[1] = u234.getUser()

// console.log(database);

// console.log(database[0].username);

const newsfeed = [
    {
        'username': 'Mike',
        'timeline': 'I\'m Boss Bish!'
    },
    {
        'username': 'Nishon',
        'timeline': 'Cut Ya!'
    },
    {
        'username': 'Carol',
        'timeline': 'It\'s a secret!'
    }
]

const addUser = () => {
    // Normally on the frontend
    let username = prompt("What's your name? ");
    let password = prompt("Enter a password? ");

    // Normally on the backend
    let newUser = new User(username,password);

    const length = database.length;

    database[length] = newUser.getUser();
}

console.log(database);

addUser()

console.log(database);

addUser()

console.log(database);