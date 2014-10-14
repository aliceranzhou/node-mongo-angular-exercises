var fs = require('fs');
var fruitBowl = ['coconut', 'papaya', 'apple', 'pineapple'];

function writeFruit(fd){
	if(fruitBowl.length){
		var fruit = fruitBowl.pop() + " ";
		fs.write(fd, fruit, null, null, function(err, bytes){
			if(err){
				console.log("File Write Failed.");
			}else{
				console.log("Wrote: %s %dbytes", fruit, bytes);
				writeFruit(fd); //inside callback to make sure that first one is written before writing second one
			}
		});
	} else{
		fs.close(fd);
	}
}

fs.open('fruit.txt', 'w', function(err, fd){
	writeFruit(fd);
});
