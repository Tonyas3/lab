const express = require("express");
const app = express();

app.get("/index",function (request, response) {
    response.redirect("https://metanit.com")
});

app.use("/home",function (request, response) {
    response.redirect("about")
});
app.use("/about", function (request, response) {
    response.send("<h1>About</h1>");
});


app.listen(3000);