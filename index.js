'use strict';

var http = require('http');
var EventEmitter = require('events');
var eventsConfig = require('./config').events;

var Hotel = require('./hotels');

var hotel1 = new Hotel('Hilton', 'Israel');
var hotel2 = new Hotel('Leonardo', 'America');
var hotel3 = new Hotel('Grands', 'Russia');

hotel1.on("eventsConfig.Hotel", function () {
	console.log("Hotel "+ this.Name + " in " + this.Country, this.Likes);
});

hotel2.on("eventsConfig.Hotel", function () {
	console.log("Hotel "+ this.Name + " in " + this.Country, this.Likes);
});

hotel3.on("eventsConfig.Hotel", function () {
	console.log("Hotel "+ this.Name + " in " + this.Country, this.Likes);
});

hotel1.Like();
hotel1.Like();
hotel1.Dislike();
hotel1.Dislike();
hotel1.Dislike();
hotel1.Dislike();
hotel1.Like();
hotel1.Like();

hotel2.Like();
hotel2.Like();
hotel2.Like();
hotel2.Like();

hotel3.Like();

http.createServer(function (req,res) {
	res.end('success\n');
}).listen(3000,'127.0.0.1');
console.log('listening on port 3000');