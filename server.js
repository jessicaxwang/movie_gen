const PORT = process.env.PORT || 8888;
const request = require('request');
const express = require('express')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Enable CORS */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/public'));

app.get('/movies.json', function(req, res) {
  console.log("IN SERVER");
  res.type('json');
  rand_id = Math.floor(Math.random() * 373818);
  url = "https://api.themoviedb.org/3/movie/" + rand_id + "?api_key=fbc86ba7bb6f223b981dface8ce52358";
  /* Grab data from another website */
  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (!error) {
      res.json(body);
    } else {
      res.send(503);
    }
  });
});

app.listen(PORT);
