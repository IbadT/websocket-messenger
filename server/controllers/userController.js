const userService = require("../services/userService");

class UserController {
    async getUsers(req, res) {
        const { id } = req.params;
        try{
            const user = await userService.getUserById(id);
            res.status(200).json(user);
        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = new UserController();