'use strict';

module.exports = (config, models) => {
    return {
        usersHandlers: require('./usersHandlers')(models)
    }
}