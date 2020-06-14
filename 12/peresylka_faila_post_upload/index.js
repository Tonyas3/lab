var http = require('http');
var fs = require('fs');
const dir = './files/';

let handler = (req,res) => {
    if (req.method == 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(fs.readFileSync(dir + 'webform.html'));
    }
    else if (req.method == 'POST') {
     let result = ' ';
     req.on('data',(data)=>{result+=data;})
        req.on('end', () =>{
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write('<h1>File upload</h1>');
            res.end(result);
        })
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('for other http-methods not so');
    }
}
    let server = http.createServer();
    server.on('request', handler);
    server.listen(3000);

    console.log('Server running on http://localhost:3000/');