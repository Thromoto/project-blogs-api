const { BlogPost, User, Category } = require('../models');

const getAllPost = async () => {
    const posts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    return posts;
};

const getPostById = async (id) => {
    const postId = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    return postId;
};

module.exports = {
    getAllPost,
    getPostById,
};
