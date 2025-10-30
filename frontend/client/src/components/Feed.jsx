import React from 'react';
import Post from './Post';

// 1. Receive 'posts' and 'loading' as props
function Feed({ posts, loading }) {

  if (loading) {
    return <h3>Loading posts...</h3>;
  }

  return (
    <div className="feed">
      <h3>All Posts</h3>
      {/* 2. Map over the REAL posts array */}
      {posts.map(item => (
        <Post key={item._id} post={item} />
      ))}
    </div>
  );
}

export default Feed;