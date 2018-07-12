var express = require('express')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var compress = require('compression');
app.use(compress());

app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT || 3000);
