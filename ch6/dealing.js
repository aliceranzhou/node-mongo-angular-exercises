var fs = require('fs');

//to delete a file...
fs.unlink("new.txt", function(err){
	console.log(err ? "File Delete Failed" : "File Deleted");
});

//to truncate files
fs.truncate("new.txt", 5, function(err){
	console.log(err ? "File Truncate Failed" : "File Truncated");
});

//making and removing directories
fs.mkdir("./data", function(err){
  fs.mkdir("./data/folderA", function(err){
    fs.mkdir("./data/folderA/folderB", function(err){
      fs.mkdir("./data/folderA/folderB/folderD", function(err){
      });
    });
    fs.mkdir("./data/folderA/folderC", function(err){
      fs.mkdir("./data/folderA/folderC/folderE", function(err){
      });
    });
  });
});

fs.rmdir("./data/folderA/folderB/folderC", function(err){
  fs.rmdir("./data/folderA/folderB", function(err){
    fs.rmdir("./data/folderD", function(err){
    });
  });
  fs.rmdir("./data/folderA/folderC", function(err){
    fs.rmdir("./data/folderE", function(err){
    });
  });
});

fs.rename("old.txt", "new.txt", function(err){
  console.log(err ? "Rename Failed" :  "File Renamed");
});
fs.rename("testDir", "renamedDir", function(err){
  console.log(err ? "Rename Failed" :  "Folder Renamed");
});
