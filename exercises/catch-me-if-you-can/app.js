function sum(x,y) {
    try {
        if (typeof x !== "number" || typeof y !=="number"){
            throw "ERROR: Inputs must be numbers!"
        }
        return x+y;
    }
    catch(err) {
        console.log(err);
    }
}

console.log(sum(6, 3))

var user = {
    username: "timgrey",
    password: "password"
}

function authenticate(username, password) {
    if (user.username !== username) {
        throw Error ("wrong username!".toUpperCase())
    }
    if (password !== user.password) {
        throw Error ("wrong password!".toUpperCase())
    }
    return {
        authenticated: true,
    }
}

function login(username, password) {
    try {
        authenticate(username, password) 
        console.log( "You Sucsessfully logged in!")
    } 
    catch (err) {
        console.log(err)
    }
}
login("timgrey","passwrd")