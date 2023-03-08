require('dotenv/config');
const userService = require('../services/User.service');
const { createToken } = require('../auth/authJWT');

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getById(id);

        if (!user) return res.status(404).json({ message: 'User does not exist' });

        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (_req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;

        const validateUserEmail = await userService.getUserByEmail(email);
        if (validateUserEmail) {
            return res.status(409).json({ message: 'User already registered' });
        }

        const newUser = await userService.createUser(displayName, email, password, image);

        const { password: _, ...userWithoutPassword } = newUser.dataValues;

        const token = createToken(userWithoutPassword);

        return res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getById,
    getAllUsers,
    createUser,
};