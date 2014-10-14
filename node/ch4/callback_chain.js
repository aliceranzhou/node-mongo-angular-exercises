function logCar(car, callback){
	console.log("Saw a %s", car);
	if(cars.length){
		process.nextTick(function(){
			callback();
		});
	}
}

function logCars(cars){
	var car = cars.pop();
	logCar(car, function(){
		logCars(cars); //logCars is used as callback; only one version of logCar() on event queue at a time
	});
}

var cars = ["Ferrari", "Porsche", "Bugatti",
	"Lamborghini", "Aston Martin"];

logCars(cars);
