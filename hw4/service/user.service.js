const User = require('../dataBase/models/User');

module.exports = {
    getAllUsers: () => User.find(),

    findUserById: (userId) => User.findUserById(userId),

    createUser: (userObject) => User.create(userObject)
};
