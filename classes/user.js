require('./lobby');

class User {
    constructor(id, name, password, role, lobby) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
        this.lobby = lobby;
    }
}