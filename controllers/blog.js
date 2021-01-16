const { Blog, validateBlog } = require('../models/blog');

const getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.send(blogs);
};

const getSingleBlog = (req, res) => {
    res.send(`Blog get single post ${req.params.id}`)
};

const postBlog = async (req, res) => {
    const { error } = validateBlog(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    let blog = new Blog(req.body);
    
    try {
        blog = await blog.save();
        res.send(blog);
    } catch(error) {
        console.log('Error while posting blog', error)
        res.status(400).send('Error while posting blog')
    }
};

const updateBlog = (req, res) => {
    res.send(`Blog update ${req.params.id}`);
};

const deleteBlog = (req, res) => {
    res.send(`Blog Delete ${req.params.id}`);
};

module.exports = { getBlogs, getSingleBlog, postBlog, updateBlog, deleteBlog }