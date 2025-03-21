const chatService = require("../services/chatService");

class ChatController {
    async sendMessage(req, res) {
        const { senderId, recipientId, content } = req.body;
        try {
            const message = await chatService.sendMessage(senderId, recipientId, content);
            res.status(201).json(message);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async getMessages(req, res) {
        const { recipientId } = req.params;
        try{
            const messages = await chatService.getMessages(recipientId);
            res.status(200).json(messages);
        } catch(error){
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = new ChatController();