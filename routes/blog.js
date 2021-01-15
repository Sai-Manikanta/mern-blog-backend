const router = require('express').Router();
const { getBlogs, getSingleBlog, postBlog, updateBlog, deleteBlog } = require('../controllers/blog');

router.get('/', getBlogs);
router.get('/:id', getSingleBlog);
router.post('/', postBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;