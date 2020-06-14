const express = require("express");

const app = express();
app.use(function(request, response, next){

    console.log("Middleware 1");
    next();
});
app.use("/about", function(request, response, next){

    console.log("About Middleware");
    response.send("About Middleware");
});

app.get("/", function(request, response){
    console.log("Route /");
    response.send("Hello");
});
app.listen(3000);

//В данном случае вторая функция middleware явно сопоставляется с маршрутом "/about",
// поэтому она будет обрабатывать только запрос "http://localhost:3000/about". Первая функция middleware по прежнему обрабатывает все запросы: