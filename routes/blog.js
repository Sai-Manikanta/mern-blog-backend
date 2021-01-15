const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Blog get')
});

router.get('/:id', (req, res) => {
    res.send(`Blog get single post ${req.params.id}`)
});

router.post('/', (req, res) => {
    res.send('Blog post')
});

router.put('/:id', (req, res) => {
    res.send(`Blog update ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Blog Delete ${req.params.id}`);
});

module.exports = router;