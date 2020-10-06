var express = require('express');
var router = express.Router();
var con = require('./database');



/* GET home page. */
router.get('/api/v1/songs', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.setHeader('Access-Control-Allow-Origin', '*');
  con.query("SELECT * FROM songs", function (err, result, fields) {
    if (err) throw err;
    return res.json(result);
  });
});

router.options('/api/v1/playlist', function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');

  res.send();
});

router.post('/api/v1/playlist', function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(!req.body.username)
    res.status(500).json({message: "username is not specified"});
  var username = req.body.username;
  if(!req.body.playlist_name)
    res.status(500).json({message: "playlistname is not specified"});
  var playlist_name = req.body.playlist_name;

  var sql1 = "SELECT count(*) FROM user_playlists WHERE username = '"+username+"' AND name = '"+playlist_name+"'";

  con.query(sql1, function (err, result, fields) {
    if (err) throw err;
    console.log(result[0]["count(*)"]);

    if(result[0]["count(*)"] != 0)
      return res.status(500).json({message: "playlist name already exists"})
    else{
      var sql = "INSERT INTO user_playlists (name, username) values ('"+playlist_name+"', '"+username+"')";

      con.query(sql, function (err, result, fields) {
        if (err) throw err;

        return res.json(result);
      });
    }
  });

})

router.get('/api/v1/user/:userId/playlists/', function(req, res, next){
  var sql = "SELECT * FROM user_playlists WHERE userid = "+req.params.userId;
  res.setHeader('Access-Control-Allow-Origin', '*');
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return res.json(result);
  });
})

router.post('/api/v1/playlist/:playlistid', function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(!req.body.songId)
    return res.status(500).json({message: "no song is specified"});

  if(!req.body.action)
    return res.status(500).json({message: "no action is specified"});

  if(req.body.action == "ADD_SONG")
  {
    var sql = "INSERT INTO playlist_songs (playlist_id, song_id) values ('"+req.params.playlistid+"', "+req.body.songId+")";
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).json(result);
    });
  }
  else if (req.body.action == "DELETE_SONG")
  {
    var sql = "DELETE FROM playlist_songs WHERE playlist_id = "+req.params.playlistid+" AND song_id = "+req.body.songId;
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).json(result);
    });
  }
  else{
    return res.status(500).json({message: "unknown action"});
  }


})

router.get('/api/v1/playlist/:playlistid', function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');

  var sql = "SELECT * FROM playlist_songs WHERE playlist_id = "+req.params.playlistid;
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return res.json(result);
  });
})


module.exports = router;
