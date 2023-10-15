"use strict";
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList;
const videos = new PlayList;
videos.add({ name: "rush gamelay", creator: "omkar", resolution: "2160p", length: 187 });
songs.add({ name: "tum hi ho", singer: "Arijit", length: 4 });
console.log(songs);
console.log(videos);
//# sourceMappingURL=genericClass.js.map