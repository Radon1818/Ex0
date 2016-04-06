'use strict';

var EventEmitter = require('events');
var eventsConfig = require('./config');

module.exports = class SomeHotel extends EventEmitter
{
	constructor (HotelName, CountryName) 
	{
		super();
		this.Name = HotelName;
		this.Likes = 0;
		this.Country = CountryName;
	}

	Like() 
	{
		this.Likes++;
		this.emit("eventsConfig.Hotel");
	}

	Dislike() 
	{
		if (this.Likes == 0 )
		{
			console.log("The Hotel "+ this.Name + " in " + this.Country + " already has 0 Likes");
		}
		else
		{
			this.Likes--;
			this.emit("eventsConfig.Hotel");
		}
	}
}