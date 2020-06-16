'use strict';

module.exports = () => {
    return require('common-env')().getOrElseAll({
        api: {
            host: '0.0.0.0',
            port: 8568
        },
        postgres: {
            connectionString: 'postgres://postgres:postgres@127.0.0.1:5432/groupvideowatching'
        }
    });
}
