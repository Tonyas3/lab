var http = require('http');

let error = (request, response) =>{
    console.log('error: HTTP status 404');
    response.end('error:HTTP status 404');
};

let debug_handler = (request,response)=>{
console.log('Hello');
response.end('Hello');
};

let GET_handler = (request, response) => {
switch(request.url){
    case '/get': debug_handler(request,response); break;
    default: error(request,response);}
};
let POST_handler = (request, response) => {
    switch(request.url){
        case '/post': debug_handler(request,response); break;
        default: error(request,response);}
};
let PUT_handler = (request, response) => {
    switch(request.url){
        case '/put': debug_handler(request,response); break;
        default: error(request,response);}
};
let DELETE_handler = (request, response) => {
    switch(request.url){
        case '/delete': debug_handler(request,response); break;
        default: error(request,response);}
};


let http_handler = (request, response) => {
    switch (request.method) {
        case 'GET':
            GET_handler(request, response);
            break;
        case 'POST':
            POST_handler(request, response);
            break;
        case 'PUT':
            PUT_handler(request, response);
            break;
        case 'DELETE':
            DELETE_handler(request, response);
            break;
        default:
            error(request, response);
            break;
    }
};

let server = http.createServer();
server.listen(3000,(v)=>{console.log('server listen http://localhost:3000')})
    .on('error',(e)=>{console.log('server listen http://localhost:3000: error: ', e.code)})
    .on('request', http_handler);