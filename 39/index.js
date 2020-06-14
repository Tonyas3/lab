const fs = require('fs');
const app = require('express')();

    app.get('/download', (req, res, next)=> {
        console.log('download');
        res.download('./file.png', 'file.png');
    })

app.get('/attachment', (req, res, next)=> {
    console.log('attachment');
    res.attachment('./file.png'); //добавить заголовок
    let rs = fs.ReadStream('./file.png');
    rs.pipe(res);
})

app.listen(3000);