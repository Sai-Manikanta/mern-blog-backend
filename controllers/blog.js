const getBlogs = (req, res) => {
    res.send('Blog get')
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