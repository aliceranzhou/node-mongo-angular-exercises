function logCar(logMsg, callback){
	process.nextTick(function() {
		callback(logMsg);
	});
}

var cars = ["Ferrari", "Porshe", "Bugatti"];

for (var idx in cars){
	var message = "Saw a " + cars[idx];
	logCar(message, function(){
		console.log("Normal Callback: " + message);
	});
}

for (var idx in cars){
	var message = "Saw a " + cars[idx];
	(function(msg){ //this wrapper provides closure, allowing the callback to access variables bound to a function's scope.
		logCar(msg, function(){
			console.log("Closure Callback: " + msg);
		});
	}) (message);
}

