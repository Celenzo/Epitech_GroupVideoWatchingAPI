class Lobby {

    bannedUsers = [];

    constructor(id, password) {
        this.password = password;
        this.id = id;
    }

    banUser(userId) {
        this.bannedUsers.push(userId);
    }
}

module.exports = Lobby;