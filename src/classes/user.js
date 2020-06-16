require('./lobby');

class User {
    constructor(id, name, password, role) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
    }
}

module.exports = User;