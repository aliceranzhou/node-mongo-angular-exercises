var fs = require('fs');

var cookies = {
	cost: 5,
	deliciousness: 10,
	baketime: 60
};

var cookieTxt = JSON.stringify(cookies);
var options = {encoding:'utf8', flag:'w'};

fs.writeFile('cookies.txt', cookieTxt, options, function(err){
	if(err){
		console.log("Cookie Write Failed.")
	}else{
		console.log("Cookie Saved.");
	}
});
