const rpcWSC = WebSocket = require('rpc-websockets').Client;

let ws = new rpcWSC('ws://localhost:4000/');

ws.on('open', () => {
    ws.call('square', [5, 4]).then((r) => {
        console.log('square = ', r);
    });
    ws.call('sum', [2, 4, 6, 8, 10]).then((r) => {
        console.log('sum = ', r);
    });
    ws.call('mul', [3, 5, 7, 9, 11, 13]).then((r) => {
        console.log('mul = ', r);
    });
});