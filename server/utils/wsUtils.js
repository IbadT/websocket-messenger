function setupWebSocket(ws) {
    ws.on('connection', (message) => {
        console.log("Соединение установлено");

        ws.on('message', async (msg) => {
            const {senderId, recipientId, content} = JSON.parse(msg);

            const message = await chatService.sendMessage(senderId, recipientId, content);

            // рассылка сообщений всем клиентам
            ws.clients.forEach(client => {
                if(client.readyState === client.OPEN) {
                    client.send(JSON.stringify(message));
                }
            })
        })

        ws.on('close', () => {
            console.log("Соединение закрыто")
        })
    })
};

module.exports = setupWebSocket;