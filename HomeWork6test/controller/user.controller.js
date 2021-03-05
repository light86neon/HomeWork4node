const userService = require('../service/user.service');

const errorMessage = require('../error/error.messages');
const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            await res.json(req.user);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);
        } catch (e) {
            const { preferLang = 'ua' } = req.body;
            res.status(errorCodes.CREATED).json(errorMessage.CREATED_USER[preferLang]);
        }
    },
    deleteOneUser: async (req, res) => {
        try {
            const { preferLang = 'ua' } = req.body;
            const { userId } = req.params;

            await userService.deleteUser(+userId);

            res.status(errorCodes.DELETED).json(errorMessage.DELETE_USER[preferLang]);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

};
