'use strict';

const massive = require('massive');

module.exports = (config) => {

    return massive(config.postgres).then(db => {
        return {
            usersModels: require('./usersModels')(db)
        }
    });

}