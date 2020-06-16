'use strict'

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const init = async() => {
    try {

        const dburl = 'mongodb://127.0.0.1:27017';
        const dbname = 'groupvideowatching';
        const client = new MongoClient(dburl);

        const server = express();

        await client.connect((err) => {
            assert.equal(null, err);
            console.log('Successfully connected to database');
            const db = client.db(dbname);
            client.close();
        });

        await require('./routes')(server);
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