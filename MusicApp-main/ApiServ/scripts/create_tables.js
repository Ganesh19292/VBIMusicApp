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
    var sql = "CREATE TABLE songs (id INT AUTO_INCREMENT PRIMARY KEY, songtitle VARCHAR(255), singers VARCHAR(255), album VARCHAR(255), playtime VARCHAR(255))";
    //var sql = "DROP TABLE IF EXISTS songs";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

    var newsql = "CREATE TABLE user_playlists (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), username VARCHAR(255))";
    //var newsql = "DROP TABLE IF EXISTS user_playlists"

    con.query(newsql, function (err, result) {
        if (err) throw err;
        console.log("Table1 created");
    });

    var newestsql = "CREATE TABLE playlist_songs (id INT AUTO_INCREMENT PRIMARY KEY, playlist_id INT, song_id INT)"
    //var newestsql = "DROP TABLE IF EXISTS playlist_songs"

    con.query(newestsql, function (err, result) {
        if (err) throw err;
        console.log("Table2 created");
    });

});