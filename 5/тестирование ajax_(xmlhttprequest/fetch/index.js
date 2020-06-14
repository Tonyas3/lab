/* Разработка простейшего HTTP-сервера в Node.js.
    Извлечение данных из HTTP-запроса, формирование данных
HTTP-ответа. Пример. Тестирование с помощью браузера AJAX (XMLHTTPRequest/Fetch).*/

var http = require('http');
var fs = require('fs');

http.createServer(function (request,response) {
    if (request.url==='/api/name')
    {
        response.writeHead(200, {'content-Type': 'text/plain; charset=utf-8'});
        response.end('Antanovich Tatsiana Alexandrovna');
    }

    if (request.url==='/xmlhttprequest') {
        let html = fs.readFileSync('./xmlhttprequest.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
    if (request.url==='/fetch') {
        let html = fs.readFileSync('./fetch.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }

}).listen(5000);

console.log('Server running at http://localhost:5000');
