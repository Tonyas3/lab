var http =require('http');
var url = require('url');
var querystring= require('querystring');
//http://localhost:3000/bstu/it/poit/4
let handler=(req,res)=>{
    if(req.method = 'GET'){
        let p = url.parse(req.url,true);
        let result=' ';
        let q = p.query;
        if(!(p.pathname === '/')){
            result= 'pathname:' +p.pathname +'<br/>';
            decodeURI(p.pathname).split('/').forEach(e=>{result+=e+'<br/>'});
        }
        console.log(p.pathname.split('/'));
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>URL-параметры</h1>');
        res.end(result);
    }
    else{
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end('for other http-methods not so');
    }
}

let server = http.createServer();
server.listen(3000, (v)=>{console.log('http://localhost:3000')})
    .on('error', (e)=>{console.log('http://localhost:3000: error: ',e.code)})
    .on('request',handler);