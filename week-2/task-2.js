const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/text");
  res.write("Hello Badal \n");
  res.write(`Server running at http://${hostname}:${port}/`);

});
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
