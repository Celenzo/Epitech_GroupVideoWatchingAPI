require('./lobby');

class Playlist {

    playlist = [];

    constructor(lobby) {
        this.lobby = lobby;
    }

    addToPlaylist(videoInfo) {
        this.playlist.push(videoInfo);
    }

    removeFromPlaylist(videoInfo) {
        this.playlist = this.playlist.some(this.playlist.reduce((pVideos) => {
            pVideo != videoInfo;
        }));
    }

    moveInPlaylist(vidToMove) {
        //move video
    }
}

module.exports = Playlist;