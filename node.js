// const http = require("http");
// const httpserver = http.createServer(function(req,res){
//     if(req.method == 'POST')
//     {
//         res.end("This is post request");
//     }  
// });
// httpserver.listen(3000,()=>{
//     console.log("Listning on port 3000...");
// })

const http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('welcome mr <b>badal</b>');
}).listen(3000);