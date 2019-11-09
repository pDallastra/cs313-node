const http = require("http");

function onRequest(req, res) {
  if(req.url === '/home') {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<body style="font-size: 2rem; text-align: center; background-color: #1b2a49; color: white;"><h1>Welcome to the HomePage</h1></body>'
  );
  }
  else if(req.url === "/getData"){
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write('{"name":"Paulo Dallastra","class":"CS 313"}');
  }
  else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(
        '<body style="font-size: 2rem; text-align: center; background-color: #c70d3a; color: white;"><h1>404: Page Not Found!</h1><br/><a href="/home" style="text-decoration: none; color: white;">Home</a><br/><a href="/getData" style="text-decoration: none; color: white;">Get Data</a></body>'
      );
  }
  res.end();
}

http.createServer(onRequest).listen(8888);