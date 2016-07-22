var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");

var app = express();
var server = app.listen(5555);

var messages = [];

var staticPath = path.normalize(__dirname + '/public');
app.use(express.static(staticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(staticDir + "/index.html");
});

app.get("/messages", function(req, res) {
	res.json(messages);
});

app.post("/messages", function(req, res) {
	messages.push(req.body);
	res.json(req.body);
});