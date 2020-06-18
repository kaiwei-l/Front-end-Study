var express = require("express");
var app = express();
const port = 3000;


// "/" => "hi there"
app.get("/", function(req, res) {
	res.send("hi there");
});

// "/bye" => "goodbye"
app.get("/bye", function(req, res) {
	res.send("goodbye");
});

// "/dog" => "meow"
app.get("/dog", function(req, res) {
	console.log("someone made a request to /dog");
	res.send("meow");
});

app.get("/r/:subredditName", function(req, res) {
	var subreddit = req.params.subredditName.toUpperCase();
	res.send("Welcome to the " + subreddit + " subreddit");
});

app.get("*", function(reg, res) {
	res.send("Wrong URL");
});

// Tell express to listen for requests (start server)
app.listen(port, function() {
	console.log("Server has started");
});