'use strict';

const aes256 = require('aes256');

module.exports = (models) => {
    return {
        
        addUser(username, password) {
            console.log(username, password);
            const array = password.split('');
            array.reverse();
            const cipher = aes256.createCipher(array.join(''));
            return models.usersModels.addUser(username, cipher.encrypt(password));
        },

        getUser(userid) {

        },

        modifyUser(userid, username, password) {

        }

    }
}