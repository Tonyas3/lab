const express = require("express");
const app = express();

// обработка запроса по адресу /about
app.get("/about", function(request, response){

    response.send("<h1>About</h1>");
});

// обработка запроса по адресу /contact
app.use("/contact", function(request, response){

    response.send("<h1>Contact: +375299889157</h1>");
});

// обработка запроса к корню веб-сайта
app.get("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});
app.listen(3000);

//use get post put delete
