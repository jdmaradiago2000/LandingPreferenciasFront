const express = require('express');
const path = require('path');
const http = require('http').Server(app);
var ioSocket = requiere('socket.io');

const app = express();
const port = process.env.port || 3000;

app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
server.listen(80);

const io = ioSocket(http);
http.listen(port, () => {
    console.log('started on port ${port}');
  });



app.use(express.static(path.join(__dirname, 'dist')));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
});

server.listen(port, () => { 
    console.log('Server running on port ${port}');
});