import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';
import axios from 'axios'; // <-- Import

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // This function will fetch posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://linkedin-clone-backend-sqvx.onrender.com");
      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  // Run fetchPosts when the page first loads
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-content">
        {/* 1. Pass fetchPosts as a prop so we can refresh */}
        <CreatePost onPostCreated={fetchPosts} /> 
        {/* 2. Pass posts and loading state to the Feed */}
        <Feed posts={posts} loading={loading} />
      </div>
    </div>
  );
}

export default Home;