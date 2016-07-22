var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var socketio = require("socket.io")

var app = express();
var server = app.listen(5555);
var io = socketio.listen(server);

var messages = [];

var staticPath = path.normalize(__dirname + '/public');
app.use(express.static(staticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(staticDir + "/index.html");
});

io.on("connection", function(socket) {
	
	console.log("Client connected");

	socket.on("disconnected", function() {
		console.log("Client disconnected");
	});

	socket.on("chat message", function(msg) {
		messages.push(msg);
		io.emit("chat message", msg);
	});

	socket.emit("chat history", messages);
});