const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var workerProcess = child_process.exec('node support.js '+i,function
        (error, stdout, stderr) {

        if (error) {
            console.log('Error code: '+error.code);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function (code) {
        console.log('Child process exited with exit code '+code);
    });
}

//Метод child_process.exec запускает команду в оболочке и буферизирует вывод.
//command (String) — команда для запуска с аргументами, разделенными пробелом
//callback — функция принимает три аргумента error , stdout и stderr, которые вызываются с выходными данными при завершении процесса.
//
// Метод exec() возвращает буфер с максимальным размером и ожидает завершения процесса, после чего пытается сразу вернуть все буферизованные данные.
//
//Теперь запустите master.js