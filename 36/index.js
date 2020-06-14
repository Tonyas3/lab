const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/regist", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/regist.html");
});
app.post("/regist", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function(request, response){
    response.send("Главная страница");
});

app.listen(3000);

//Поскольку данные отправляются с помощью формы, то для создания парсера применяется функция urlencoded(). В эту функцию передается объект, устанавливающий параметры парсинга.
// Значение extended: false указывает, что объект - результат парсинга будет представлять набор пар ключ-значение, а каждое значение может быть представлено в виде строки или массива.
// При переходе по адресу "/register" будет срабатывать метод app.get, который отправит пользователю файл register.html.
// Так как данные отправляются с помощью метода POST, то для обработки определяем функцию app.post("/register",...). Первый параметр функции - адрес, на который идет отправка - "/register".
// Стоит отметить, что в данном случае с одинм адресом "/register" связаны две функции, только одна обрабатывает запросы get, а другая - запросы post. Второй параметр - выше созданный парсер.
// Третий параметр - обработчик: