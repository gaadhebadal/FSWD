const fs = require("fs");

// Sync
//var filelist = fs.readdirSync("./");
//console.log(filelist);
// Async
let file1="6";
let file2="";
console.log()
file1 = fs.readFile('./h2.txt','utf-8', function(err,data){
    if(err)
        console.log("There is error"+err);
    else
    {   
        console.log("1"+file1);
        //file1 = data;
        console.log("2"+file1);
        return data;
        //return typeof data;
    }
});

fs.readFile('./h.txt','utf-8', function(err,data){
    if(err)
        console.log("There is error"+err);
    else
    {    
        file2 = data;
        //return;
    }
});

console.log("3"+file1);