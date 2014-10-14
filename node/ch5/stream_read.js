var stream = require('stream');
var util = require('util');
util.inherits(MenuItems, stream.Readable);

function MenuItems(opt) {
	stream.Readable.call(this, opt);
	this.food = ["Dandelion Salad", "Roast Turkey", "Pumpkin Pie"];
	this._index = 0;
}

MenuItems.prototype._read = function() {
	if (this._index > this.food.length){
		this.push(null);
	}else{
		this.push(this.food[this._index]);
		this._index += 1;
	}
};

var r = new MenuItems();
console.log("Direct read: " + r.read().toString());
r.on('data', function(data){
	console.log("Callback read: " + data.toString());
	});
r.on('end', function(data){
	console.log("No more food.");
});
