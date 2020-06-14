const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000/');

ws.on('open', () => {
    ws.on('message', (data) => {
        console.log('on message: ', JSON.parse(data));
    });

    setInterval(() => {
        ws.send(JSON.stringify({ client: process.argv[2], timestamp: new Date().toISOString() }));
    }, 5000);
});