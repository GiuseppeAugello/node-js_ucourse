/*This how you write the server on node.js,*/ 

const http = require('http');

// function rqListener(req, res){

// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
   // process.exit(); this is to leave the process

   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Test HTML on Node.js</h1></body>');
   res.write('</html>');
   res.end();//res.end is used to end  the response
});

server.listen(3000);