import React from 'react';
import './Post.css'; // We'll create this file

// We pass 'post' as a prop
function Post({ post }) {

  // A simple function to make the date readable
  const post_date = new Date(post.createdAt).toLocaleString();

  return (
    <div className="post-card">
      <div className="post-header">
        <h4 className="post-author">{post.authorName}</h4>
        <span className="post-time">{post_date}</span>
      </div>
      <p className="post-text">
        {post.text}
      </p>
    </div>
  );
}

export default Post;