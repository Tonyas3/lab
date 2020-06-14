var http = require('http');
var fs = require('fs');

http.createServer(function (request,response) {
    if (request.url==='/html') {
        let html = fs.readFileSync('./index.html');
        response.writeHead(200, {'content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
    if (request.url === '/png') {
        fs.stat('./image.png', (err, stat) => {
            jpg = fs.readFileSync('./image.png');
            response.writeHead(200, {'Content-Type': 'image/jpeg', 'Content-Length': stat.size});
            response.end(jpg, 'binary');
        });
    }
    if (request.url==='/msword') {
        let html = fs.readFileSync('./doc.docx');
        response.writeHead(200, {'content-Type': 'application/msword'});
        response.end(html);
    }
    if (request.url==='/css') {
        let html = fs.readFileSync('./index.css');
        response.writeHead(200, {'content-Type': 'text/css; charset=utf-8'});
        response.end(html);
    }
    if (request.url==='/js') {
        let html = fs.readFileSync('./indexx.js');
        response.writeHead(200, {'content-Type': 'text/javascript; charset=utf-8'});
        response.end(html);
    }

}).listen(5000);

console.log('Server running at http://localhost:5000');