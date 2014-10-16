var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://dbadmin1:password@localhost:27017/testdb", {
	db: { w: 1, native_parser: false },
	server: {
		poolSize: 5,
	socketOptions: { connectTimeoutMS: 500},
	auto_reconnect: true
	},
	replSet: {},
	mongos: {}
}, function(err, db){
	if(err){
		console.log("Connection failed via connection string.");
		console.log(err);
	}else{
		console.log("Connected via connection string . . .");
		db.logout(function(err, result){
			if(!err){
				console.log("Logged out via connection string  . . .");
			}
			db.close();
			console.log("Connection closed . . .");
		});
	}
});

