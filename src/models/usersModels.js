'use strict';

const User = require('../classes/user');
const assert = require('assert');

module.exports = (db) => {

    return {
        addUser(username, password) {
            return db.users.insert({ username, password });
        }
    }
}