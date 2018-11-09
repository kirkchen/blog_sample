const express = require('express');
const router = express.Router();
const postService = require('../services/postService');

router.get('/', async (req, res) => {
    const posts = await postService.getPosts();

    res.json(posts);
})

module.exports = router;