const http = require('http');

const server = http.createServer((req, res) => {
 console.log( req.headers)  
  if (req.url === '/users') {
    res.statusCode = 201;
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end('users data');
  } else {
    res.end('home');
  }
});

server.listen(5000, () => {
  console.log('server is running');
});

//res object
