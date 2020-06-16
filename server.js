'use strict'

const express = require('express');
const models = require('./src/models');
const bodyParser = require('body-parser');
const config = require('./config')();

const init = async() => {
    try {

        const server = express();

        server.use(bodyParser.urlencoded({ extended: true }));

        require('./src')(config, server);

        await server.listen(4242, () => {
            console.log('Server started')
        });
    }
    catch (err) {
        throw err;
    }
}

init()
    .then(server => {
        console.log('Listening on port 4242');
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })