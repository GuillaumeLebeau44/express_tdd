const express = require("express");
const app = express();
const port = 5000;
app.listen(port, (err) => {
    if (err) {
        console.error('Something bad happened');
    } else {
        console.log(`Server is listening on ${port}`);
    }
});

app.get("/", (req, res) => {
    res.send("Welcome");
});

// const getAlbums = (req, res) => {
//     let arrLimit = parseInt(req.query.limit);
//     if ( typeof arrLimit === undefined ){
//         res.status(200).json(albums.slice(0, arrLimit));
//     } else {
//         res.status(200).json(albums);
//     }
//     console.log(typeof arrLimit)
//     console.log(req.query)
//     console.log(req.query.limit)
// };

app.get("/albums", (req, res) => {
    
    if (req.query.limit !== undefined){

        if (req.query.AlbumDate !== undefined) {

            const getAlbums = albums.filter((album) => { return album.AlbumDate > req.query.AlbumDate})
            res.status(200).send(getAlbums.slice(0, req.query.limit))

        } else {
            const getAlbums = albums.slice(0, req.query.limit)

            res.status(200).send(getAlbums)
        }

    } else {

        if(req.query.AlbumDate !== undefined) {
            const getAlbums = albums.filter((album) => { return album.poison > req.query.AlbumDate})
            res.status(200).send(getAlbums)
        } else {

            res.status(200).send(albums)
        }
    }
});

const getId = (req, res) => {

    const albumId = albums.find((album) => album.id == req.params.id)
    
    if (albumId === undefined){
        res.status(404).send("Not Found");
    } else {
        res.status(200).json(albumId);
    }
}

app.get("/albums/:id", getId);











const albums = [
    {
      id: 1,
      AlbumPic: "https://upload.wikimedia.org/wikipedia/en/f/fe/Post_Malone_-_Austin.png",
      AlbumName: "AUSTIN",
      AlbumDate: "2023",
      AlbumArtist: "Post Malone",
    },
    {
      id: 2,
      AlbumPic: "https://upload.wikimedia.org/wikipedia/en/3/3f/Jungle_-_Volcano.png",
      AlbumName: "Volcano",
      AlbumDate: "2023",
      AlbumArtist: "Jungle",
    },
    {
      id: 3,
      AlbumPic: "https://upload.wikimedia.org/wikipedia/en/4/49/Sum41chuck.jpg",
      AlbumName: "Chuck",
      AlbumDate: "2004",
      AlbumArtist: "Sum41",
    },
    {
      id: 4,
      AlbumPic: "https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png",
      AlbumName: "The Slow Rush",
      AlbumDate: "2020",
      AlbumArtist: "Tame Impala",
    },
    {
      id: 5,
      AlbumPic: "https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png",
      AlbumName: "American Idiot",
      AlbumDate: "2004",
      AlbumArtist: "Green Day",
    },
    {
      id: 6,
      AlbumPic: "https://gamingaudionews.files.wordpress.com/2021/06/road-96-soundtrack.jpg?w=505",
      AlbumName: "Road 96 (Original Game Soundtrack)",
      AlbumDate: "2021",
      AlbumArtist: "Various Artists",
    },
    {
      id: 7,
      AlbumPic: "https://upload.wikimedia.org/wikipedia/en/f/f3/Trench_Twenty_One_Pilots.png",
      AlbumName: "Trench",
      AlbumDate: "2018",
      AlbumArtist: "21 Pilots",
    },
    {
      id: 8,
      AlbumPic: "https://upload.wikimedia.org/wikipedia/en/4/4f/Cleopatra_album_cover.jpg",
      AlbumName: "Cleopatra",
      AlbumDate: "2016",
      AlbumArtist: "The Lumineers",
    },
    {
    id: 9,
    AlbumPic: "https://f4.bcbits.com/img/a0569041754_65",
    AlbumName: "Journey",
    AlbumDate: "2012",
    AlbumArtist: "Austin Wintory",
    },
    {
    id: 10,
    AlbumPic: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Supertramp_-_Breakfast_in_America.jpg/220px-Supertramp_-_Breakfast_in_America.jpg",
    AlbumName: "Breakfast in America",
    AlbumDate: "1979",
    AlbumArtist: "Supertramp",
    },
  ]