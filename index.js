const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {   
    socket.on('message', (message) => {
        io.emit('message', message);
    });
});

server.listen(3005, () => {
    console.log(`Server is running on http://localhost:3005`);

});
 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});