const express = require('express');
const router = express.Router();
// Importing our controller and middleware
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', authMiddleware, postController.createPost);

router.get('/', postController.getAllPosts);
module.exports = router;