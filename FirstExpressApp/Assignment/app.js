var express = require("express");
var app = express();
const port = 3000;

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res) {
	var animal = req.params.animal.toLowerCase();
	var sounds = {
		pig: "oink",
		cow: "moo",
		dog: "woof",
		cat: "i hate you human",
		goldfish: "..."
	}

	var sound = sounds[animal];

	res.send("the " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req, res) {
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = "";

	for(var i = 0; i < times; i++) {
		result += message + " ";
	}
	res.send(result);
});

app.get("*", function(req, res) {
	res.send("Wrong URL");
});

app.listen(port, function() {
	console.log("Server has started");
});