const { User } = require('../models');

const getUserByEmail = async (email) => {
    const userByEmail = await User.findOne({ where: { email } });

    return userByEmail;
};

const createUser = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });

    return newUser;
};

module.exports = {
    getUserByEmail,
    createUser,
};
