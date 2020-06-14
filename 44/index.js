const spawn = require('child_process').spawn;
const dir = spawn('cmd.exe', ['/C', 'dir']);
const findstr = spawn('findStr', ['/c:ind']);

dir.stdout.pipe(findstr.stdin);

dir.stdout.on('data', function (data) {console.log('dir stdout: ' + data.toString());});
dir.on('close', function (code, signal) {console.log('dir close code ' + code);});

findstr.stdout.on('data', function (data) {console.log('findstr stdout: ' + data.toString());});
findstr.on('close', function (code, signal) {console.log('findstr close code ' + code);});


//Метод child_process.spawn запускает новый процесс с помощью заданной командой
//Метод spawn() возвращает потоки (stdout & stderr), он должен использоваться, когда процесс возвращает большой объем данных.
// spawn() начинает принимать ответ, сразу после начала выполнения процесса.

//Pipe - это канал, который связывает поток для чтения и поток для записи и позволяет сразу считать из потока чтения в поток записи.