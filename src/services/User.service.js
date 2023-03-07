const { User } = require('../models');

const getById = async (userId) => {
    const user = await User.findByPk(userId);
    return user;
};

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getUserByEmail = async (email) => {
    const userByEmail = await User.findOne({ where: { email } });
    return userByEmail;
};

const createUser = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

module.exports = {
    getById,
    getAllUsers,
    getUserByEmail,
    createUser,
};
