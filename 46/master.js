// //fork, send, worker
// const child = require('child_process');
// const fp = child.fork('support.js');
//
// const f = ()=>{console.log('lala');}
// setInterval(f,3000);
//
// let x = 0;
// const s = ()=>{fp.send(`from la: ${++x}`)};
// setInterval(s,6000);

//Метод child_process.fork является особым случаем spawn() для создания процессов Node.
//modulePath (String) — Модуль для запуска в дочернем элементе.
//args (Array) — Список аргументов строки
//В дополнение к тому, что он содержит все методы, что и стандартный экземпляр дочернего процесса, метод fork возвращает объект со встроенным каналом связи.

//Метод spawn() возвращает потоки (stdout & stderr), он должен использоваться, когда процесс возвращает большой объем данных.
// spawn() начинает принимать ответ, сразу после начала выполнения процесса.

//Метод child_process.fork() является частным случаем child_process.spawn(), который используется определенно для создания новых процессов Node.js. Подобно child_process.spawn(),
// в итоге возвращается объект ChildProcess. Возвращаемый ChildProcess имеет дополнительные каналы связи, которые позволяют сообщениям передаваться по обоим направлениям (вперед-назад)
// между родительским и дочерним процессом.
// Важно иметь в виду, что созданные дочерние процессы в Node.js являются независимыми от родительских, за исключением канала связи IPC, который устанавливается между ними.
// Каждый процесс имеет собственную память, с собственными экземплярами V8. Из-за требований к дополнительному выделению ресурсов, не рекомендуется создание большого количества дочерних
// процессов.
// По умолчанию, child_process.fork() создает новые экземпляры Node.js, используя process.execPath из родительского процесса. Свойство execPath в объекте позволяет использовать
// альтернативный путь выполнения.
// Процессы Node.js, зпапускаемые с помощью кастомного execPath сообщаются с родительским процессом через файловый дескриптор (fd), который определяется переменной окружения NODE_CHANELL_FD
// в дочернем процессе. Входом и выходом в этом дескрипторе являются объекты JSON, разделенные строкой.

//worker
// для запуска этого кода командой node --experimental-worker master.js
const { Worker } = require('worker_threads')

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./service.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}
async function run() {
    const result = await runService('world')
    console.log(result);
}
run().catch(err => console.error(err))
//Рассмотрим пример работы с потоками воркеров. У нас будет главный файл, index.js, в котором мы создадим поток воркера и передадим ему какие-то данные для обработки.
// Соответствующий API основан на событиях, но я собираюсь использовать здесь промис, который разрешается при поступлении первого сообщения от воркера
//при создании воркера нужно передать конструктору Worker путь к файлу с кодом воркера и данные. Помните о том, что эти данные клонируются, а не хранятся в разделяемой памяти. После запуска воркера мы ожидаем сообщения от него, прослушивая событие message.
// Выше мы, создавая объект типа Worker, передавали конструктору имя файла с кодом воркера — service.js.
//




