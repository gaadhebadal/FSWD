const http = require("http");

const httpServer = http.createServer(function (req, res) {
  if (req.url === "/") {
    if (req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello, world!");
    } else {
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/plain");
      res.end("Method Not Allowed");
    }
  } else if (req.url === "/about") {
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(`Received data: ${body}`);
      });
    } else {
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/plain");
      res.end("Method Not Allowed");
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

httpServer.listen(3000, () => {
  console.log("Listening on port 3000...");
});
