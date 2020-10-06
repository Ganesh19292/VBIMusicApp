var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "MusicApp"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    sql = "INSERT INTO songs (songtitle, singers, album, playtime) values ('SongTitle1' , 'Singers1' , 'Album1' , '10'),('SongTitle2' , 'Singers2' , 'Album2' , '20'),('SongTitle3' , 'Singers3' , 'Album3' , '30'),('SongTitle4' , 'Singers4' , 'Album4' , '40'),('SongTitle5' , 'Singers5' , 'Album5' , '50'),('SongTitle6' , 'Singers6' , 'Album6' , '60'),('SongTitle7' , 'Singers7' , 'Album7' , '70'),('SongTitle8' , 'Singers8' , 'Album8' , '80'),('SongTitle9' , 'Singers9' , 'Album9' , '90'),('SongTitle10' , 'Singers10' , 'Album10' , '100'),('SongTitle11' , 'Singers11' , 'Album11' , '110'),('SongTitle12' , 'Singers12' , 'Album12' , '120')"
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Values added");
    });
});