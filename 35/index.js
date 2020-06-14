const express = require("express");
const app = express();

app.get("/student/:studentId", function (request, response) {
    response.send("studentId: " + request.params["studentId"])
});

app.get("/faculty/:facultyId/student/:studentId", function (request, response) {
    let catId = request.params["facultyId"];
    let prodId = request.params["studentId"];
    response.send(`Faculty: ${catId}  Student: ${prodId}`);
});

app.listen(3000);
//http://localhost:3000/student/78
//В данном случае параметр называется "productId". Через коллекцию request.params можно получить все параметры и, в частности, значение параметра productId.

