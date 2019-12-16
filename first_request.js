//Using a weather API

var request = require("request");

request('http://api.weatherapi.com/v1/forecast.json?key=5962a160d5ff4087a35101914191112&q=q=10310&days=2', function(error, response, body){
	if(!error && response.statusCode == 200){
		var jBody = JSON.parse(body);
		console.log(jBody.current.condition);
	}

});