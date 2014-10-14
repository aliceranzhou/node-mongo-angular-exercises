process.on('message', function(message, parent) {
	var meal = {};
	switch (message.cmd){
		case 'makeBreakfast':
			meal = ["buns", "eggs", "smoothie"];
			break;
		case 'makeLunch':
			meal = ["salad", "turkey", "cake"];
			break;
		case 'makeDinner':
			meal = ["soup", "fish", "cabbage"];
			break;
	}
	process.send(meal);
});


