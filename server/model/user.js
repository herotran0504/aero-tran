class User {
    constructor(id, username, password, email, firstName, lastName, dob, address) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.address = address;

    }
}

module.exports = User;