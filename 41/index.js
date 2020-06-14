// const express = require('express');
// const app = express();
// const cookieparser = require('cookie-parser')();
//
// app.use(cookieparser);
//
// app.get('/', (req, res, next)=>{
//     let myid = req.cookies.myid;
//
//     if (isFinite(myid)) ++myid;
//     else myid = 0;
//
//     console.log('cookies', req.cookies);
//     res.cookie('myid', myid).send( `myid = ${myid}`);
// });
//
// app.listen(3000, () =>console.log('Start server port: ', 3000));

//signed cookie
const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');

const cookiesecret = '1234567890';

app.use(cookieparser(cookiesecret));

app.get('/', (req, res, next)=>{
    let myid = req.signedCookies.myid;

    if (isFinite(myid)) ++myid;
    else myid = 0;

    console.log('myid = ', myid);
    res.cookie('myid', myid, {signed:true}).send( `myid = ${myid}`);
});

app.listen(3000, () =>console.log('Start server port: ', 3000));