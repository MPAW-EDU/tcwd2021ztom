

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

const u123 = new User("Mike","12345678");
const u234 = new User("Helba","23456789");

database[0] = u123.getUser()
database[1] = u234.getUser()

console.log(database);

// console.log(database[0].username);

const newsfeed = [
    {
        'username': 'Mike',
        'timeline': 'I\'m Boss Bish!'
    },
    {
        'username': 'Helba',
        'timeline': 'Cut Ya!'
    },
    {
        'username': 'Carol',
        'timeline': 'It\'s a secret!'
    }
]

const Register = () => {
    // Normally on the frontend
    let username = prompt("What's your name? ");
    let password = prompt("Enter a password? ");

    // Normally on the backend
    let newUser = new User(username,password);

    const length = database.length;

    database[length] = newUser.getUser();
}

const Signin = (userInput, passwordInput) => {
    let result = 0
    console.log(database);
    
    for (user of database){
        if (user.username === userInput && user.password === passwordInput){
            return newsfeed[0].timeline
        } else {
            return "Incorrect Username or Password"
        }
    }
    
    return result
}

let usernamePrompt = prompt("Username: ");
let passwordPrompt = prompt("Password: ")

console.log(Signin("Mike","12345678"));

