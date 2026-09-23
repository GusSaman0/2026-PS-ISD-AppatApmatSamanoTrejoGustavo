const net = require('net');

const HOST = process.env.host || '127.0.0.1';
const PUERTO = 5000;

const socket = net.connect(PUERTO, HOST, () => {
    console.log(`[TCP] Conectando al HOST ${HOST}:${PUERTO}`);
    //vamos a enviar un mensaje
    ['Uno','Dos','Habia una vez','un','patito','Que decia miau miau'].forEach((mensaje) => socket.write(`${mensaje}/n`));
    socket.end;
});

socket.on('data', (datos) => {
    process.stdout.write(`[TCP] ${datos.toString()}`);
});

socket.on('close', () => {
    console.log(`[TCP] Conexión Cerrada con el Servidor`);
});

socket.on('error', (error) => {
    console.log(`[TCP] No se pudo conectar`, error.message);
});