class User {
    constructor(_id, username, password, email, name, dob, address) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.dob = dob;
        this.address = address;
    }
}

module.exports = User;