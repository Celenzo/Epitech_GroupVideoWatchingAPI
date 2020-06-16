'use strict'

module.exports = (server) => {
    server.route('/lobby')
        //User
        .get((req, res) => {
            //join a lobby with credentials
        })
        //Admin
        .post((req, res) => {
            //create a lobby with password
        })
        //Admin
        .put((req, res) => {
            //modify a lobby password
        });

    server.route('/lobby/:id/playlist')
        //User
        .get((req, res) => {
            //Retreive the current lobby's playlist
        })
        //Admin
        .put((req, res) => {
            //Playlist controls
        })
        //Admin
        .post((req, res) => {
            //Add a video to the playlist
        })
        //Admin
        .delete((req, res) => {
            //Delete a video from the playlist
        })

    server.route('/lobby/:id/player')
        //User
        .get((req, res) => {
            //Stream the current video
        })
        //Admin
        .post((req, res) => {
            //Add next video
        })
        //Admin
        .put((req, res) => {
            //Use controls on the video
        })

    server.route('/lobby/:id/users')
        //User
        .get((req, res) => {
            //Get current users list
        })
        //Admin
        .delete((req, res) => {
            //kick user from lobby
        })

    server.route('/users/')
        //User
        .post((req, res) => {
            //Create new user
        })
        //User
        .get((req, res) => {
            //Get user information
        })
        //User (own account)
        .put((req, res) => {
            //Update user info
        })
}