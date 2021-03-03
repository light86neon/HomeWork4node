const userService = require('../service/user.service');
const { passwordHelper } = require('../helpers');

const errorCodes = require('../constant/errorCodes.enum');
const errorMessage = require('../error/error.messages');

const userModel = require('../dataBase/models/User');


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
            const { password } = req.body;

            const hashPassword = await hashPassword.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });

            res.status(errorCodes.CREATED).json(errorMessage.CREATED_USER);
        } catch (e) {
            res.json(e);
        }
    },

    deleteOneUser: async (req, res) => {
        try {
            const { userId } = req.params;
            await userModel.remove({ userId });

            res.status(errorCodes.SERVER_ERROR).json(errorMessage.DELETE_USER);
        } catch (e) {
            res.status(errorCodes.DELETED).json(errorMessage.DELETE_USER);
        }
    }
};
