var fs = require('fs');

const server = require('http').createServer((req,res)=>{
    if(req.method == "GET"){
        res.writeHead(200,{'Content_type': 'text/html; charset=utf-8'});
        require('fs').createReadStream('./File1.txt').pipe(res);
    }
    if(req.method == "POST"){
        res.writeHead(200,{'Content_type': 'text/html; charset=utf-8'});
        req.pipe(process.stdout);
        res.end();
    }
});
server.listen(3000);
//Pipe - это канал, который связывает поток для чтения и поток для записи и позволяет сразу считать из потока чтения в поток записи.
// Для чего они нужны? Возьмем, к примеру проблему копирования данных из одного файла в другой.
//У потока чтения вызывается метод pipe(), в который передается поток для записи.