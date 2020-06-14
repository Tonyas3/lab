const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});

app.listen(3000);
//http://localhost:3000/ind.html
//Чтобы встроить компонент express.static в процесс обработки запроса, вызывается функция app.use().
// Эта функция позволяет добавлять различные компоненты, которые еще называются middleware, в конвейер обработки запроса:
//Причем данный вызов помещается до всех остальных вызовов функции app.get().
// В саму же функцию express.static() передается путь к папке со статическими файлами. Специальное выражение __dirname позволяет получить полный путь к папке.