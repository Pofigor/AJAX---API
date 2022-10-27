const express = require('express');

const router = express.Router();

// const { findAllPosts, findOnePost } = require('../Controllers/postsControllers');
const { findOnePost } = require('../Controllers/postsControllers');


// router.get('/all', findAllPosts);

router.get('/:id', findOnePost);

module.exports = router;
