require('dotenv').config();
const express = require('express');
const expressWs = require('express-ws');

const app = express();
const expressWsInstance = expressWs(app); // Инициализация express-ws

app.use(express.json());

const messages = [];

app.ws('/chat', (ws, req) => {
    console.log('WebSocket connection established');

    // Отправляем историю сообщений новому клиенту
    ws.send(JSON.stringify(messages));

    ws.on('message', (msg) => {
        console.log('Message received: ' + msg);
        const message = JSON.parse(msg);
        messages.push(message); // Добавляем новое сообщение в массив

        // Отправляем новое сообщение всем подключенным клиентам
        expressWsInstance.getWss().clients.forEach(client => {
            if (client.readyState === client.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on ${process.env.PORT}`));