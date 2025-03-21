const User = require("../models/_models");

class UserService {
    async getUserById(id) {
        return await User.find(id);
    }
};

module.exports = new UserService();