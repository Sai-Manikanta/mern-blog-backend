const mongoose = require('mongoose');
const Joi = require('joi');

const blogSchema = new mongoose.Schema({
    title: String,
    body: [String],
    tags: [String],
    image: String,
    author: String,
    date: { type: Date, default: Date.now },
    publish: { type: Boolean, default: false }
});

function validateBlog(blog){
    const schema = {
        title: Joi.string().min(3).max(50).required(),
        body: Joi.array().min(1).max(1255).required(),
        tags: Joi.array().min(1).required(),
        image: Joi.string().min(3).max(255).required(),
        author: Joi.string().min(3).max(50).required()
    };

    return Joi.validate(blog, schema);
} 

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Blog, validateBlog };