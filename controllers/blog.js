const Blog = require('../models/blog');

const getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.send(blogs);
};

const getSingleBlog = (req, res) => {
    res.send(`Blog get single post ${req.params.id}`)
};

const postBlog = (req, res) => {
    res.send('Blog post')
};

const updateBlog = (req, res) => {
    res.send(`Blog update ${req.params.id}`);
};

const deleteBlog = (req, res) => {
    res.send(`Blog Delete ${req.params.id}`);
};

module.exports = { getBlogs, getSingleBlog, postBlog, updateBlog, deleteBlog }