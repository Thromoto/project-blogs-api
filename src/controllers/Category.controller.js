require('dotenv/config');
const categoryService = require('../services/Category.service');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: '"name" is required' });
        }
        const newCategory = await categoryService.createCategory(name);
        return res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAll = async (_req, res) => {
    try {
        const categories = await categoryService.getAll();
        return res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCategory,
    getAll,
};