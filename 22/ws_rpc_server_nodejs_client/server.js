const rpcWSS = require('rpc-websockets').Server;

let server = new rpcWSS({ port: 4000, host: 'localhost' });

server.register('square', square).public();
server.register('sum', params => params.reduce((a, b) => a + b, 0)).public();
server.register('mul', params => params.reduce((a, b) => a * b, 1)).public();

function square(args) {
    if (args.length === 1) {
        return Math.PI * args[0] * args[0];
    } else if (args.length === 2) {
        return args[0] * args[1];
    } else {
        return 0;
    }
}
