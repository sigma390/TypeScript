

interface song{
    name:string;
    singer:string;
    length:number;
}


interface Video{
    name:string;
    creator:string;
    resolution:string;
    length:number;
}


class PlayList<T>{
    public queue:T[] =[]
    add(el:T){
        this.queue.push(el);
    } 
}


const songs = new PlayList<song>;
const videos = new PlayList<Video>;
videos.add({name:"rush gamelay",creator:"omkar",resolution:"2160p",length:187})
songs.add({name:"tum hi ho",singer:"Arijit",length:4});

console.log(songs);
console.log(videos);