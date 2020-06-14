var http =require('http');
var url = require('url');
var querystring= require('querystring');
//http://localhost:3000/gfjk/?d=f&k=lm/gfjo;p
let handler=(req,res)=>{
    if(req.method = 'GET'){
        let path = url.parse(req.url).pathname;

        let p = url.parse(req.url,true);
        let result=' ';
        let q = p.query;
        if(!(p.pathname === '/')){
            result= 'href:' + p.href + '<br/>' +
                'path:' + p.path +'<br/>' +
                'pathname:' +p.pathname +'<br/>' +
                'search:' + p.search + '<br/>';
         //   for(key in q){result+=([key] = q[key]) +'<br/>';
            //   }
        }
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>GET-параметры</h1>');
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