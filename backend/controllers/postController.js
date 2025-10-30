const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { text } = req.body;

    
    
    const userId = req.user.id;
    const authorName = req.user.name;

    
    const newPost = new Post({
      text: text,
      user: userId,
      authorName: authorName,
    });

    
    const post = await newPost.save();

    
    res.status(201).json(post);
  } catch {
    
    res.status(500).send('Server Error');
  }
};


exports.getAllPosts = async (req, res) => {
  try {
    
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch {
    
    res.status(500).send('Server Error');
  }
};