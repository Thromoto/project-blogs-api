require('dotenv/config');
const postService = require('../services/Post.service');

const getAllPost = async (_req, res) => {
    try {
        const posts = await postService.getAllPost();
        return res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const postId = await postService.getPostById(id);

        if (!postId) return res.status(404).json({ message: 'Post does not exist' });

        return res.status(200).json(postId);        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPost,
    getPostById,
};