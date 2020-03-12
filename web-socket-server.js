const WebSocketServer = require('ws').Server;

const WSS = new WebSocketServer({port: 3000});

WSS.on('connection', (ws) => {
    ws.on('message', (message) => {
        if (message == 'close'){
            ws.close();
        } else {
            WSS.clients.forEach((client) => {
                console.log('clientasad', client);
                client.send(message);
            });
        }
        console.log('sadsadsa', message);

    })
    console.log("we are connected");
});

