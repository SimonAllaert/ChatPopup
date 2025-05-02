const socket = new WebSocket('ws://localhost:8765');
socket.addEventListener('open', function (event) {
    socket.send('Connection Established');
});

socket.addEventListener('message', function (event) {
    console.log(event.data);
});

const contactServer = () => {
    socket.send("Initialize");
}