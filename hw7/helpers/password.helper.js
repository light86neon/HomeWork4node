const bcrypt = require('bcrypt');

const { simpleError } = require('../constant');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hashPassword) => {
        const isPasswordEquals = await bcrypt.compare(password, hashPassword);

        if (!isPasswordEquals) {
            throw new Error(simpleError.WRONG_EMAIL_OR_PASSWORD);
        }
    }
};
