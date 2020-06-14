const app = require('express')();


app.get('/part', (req, res) => {
    res.sendFile('part.html', {root: __dirname});
});

app.listen(3000);
