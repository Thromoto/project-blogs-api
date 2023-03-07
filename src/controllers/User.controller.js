require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../services/User.service');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '30min',
  };

const createToken = (email) => jwt.sign({ email }, secret, jwtConfig);

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
    createUser,
};