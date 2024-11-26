let users = [];

function signUp() {
    try {
        let name = prompt("Sign Up - Enter your name:");
        let username = prompt("Sign Up - Enter your username:");
        let password = prompt("Sign Up - Enter your password:");

        if (name.length < 1) throw new Error("Name must be at least 1 character long");
        if (username.length < 4) throw new Error("Username must be at least 4 characters long");
        if (password.length < 6) throw new Error("Password must be at least 6 characters long");

        let user = { name, username, password };
        users.push(user);
        console.log("User register successfully!");
    } catch (error) {
        console.error("Error during sign up: " + error.message);
    }
}

function signIn() {
    try {
        let username = prompt("Sign In - Enter your username:");
        let password = prompt("Sign In - Enter your password:");

        let user = users.find(user => user.username === username && user.password === password);
        if (!user) throw new Error("Invalid username or password.");
        console.log("User signed in successfully!");
    } catch (error) {
        console.error("Error during sign in: " + error.message);
    }
}

signUp();
signIn();