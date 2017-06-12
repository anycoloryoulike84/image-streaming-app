"use strict";

var express = require("express");
var app = express();

app.use(express.json());

app.get("/", function(request,response){
	response.send("hello world");
	console.log("hello world")
});

app.listen(8000);
