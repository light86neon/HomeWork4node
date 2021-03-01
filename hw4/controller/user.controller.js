const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessage = require('../error/error.messages');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    findUserById: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userService.findUserById(userId);

            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);

            res.status(errorCodes.CREATED).json(errorMessage.CREATED_USER);
        } catch (e) {
            res.json(e);
        }
    }
};
