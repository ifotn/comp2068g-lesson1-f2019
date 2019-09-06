// include the built-in node http module
let http = require('http');

// start an http server, listen for requests and handle any incoming events
// arrow function is a short hand for anonymous keyword "function"
http.createServer((request, response) => {
    // write an OK 200 http header
    response.writeHead(200, { 'Content-Type': 'text-html'} );

    // send response body
    response.end('<h1>Hello from Node http server</h1>');
}).listen(3000);

console.log('Http server running at http://localhost:3000');

