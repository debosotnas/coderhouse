//index.js:
const http = require("http");
const handleServer = function(req, res){
  res.write(`
    <html>
      <head>
        <title>Mi primer web server</title>
      </head>
      <body>
        <h1>Hola mundo</h1>
      </body>
    </html>
  `);
  res.end();
};
const server = http.createServer(handleServer);
server.listen(3000);
