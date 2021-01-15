const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    body: [String],
    tags: [String],
    image: String,
    author: String,
    date: { type: Date, default: Date.now },
    publish: { type: Boolean, default: false }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;