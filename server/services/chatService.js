const Message = require("../models/_models");

class ChatService {
    async getMessage(senderId, recipientId, content) {
        return await Message.create(senderId, recipientId, content);
    };

    async getMessages(senderId, recipientId) {
        return await Message.find({senderId, recipientId});
    }
};

module.exports = new ChatService();