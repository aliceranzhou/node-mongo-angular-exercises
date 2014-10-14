var cc = new Buffer("chocolate cake?");
var rp = new Buffer("raspberry pie?");
var question = new Buffer("Would you like a slice of ");
console.log(Buffer.concat([question, cc]).toString());
console.log(Buffer.concat([question, rp]).toString());
