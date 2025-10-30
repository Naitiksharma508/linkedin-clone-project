import React, { useState } from 'react';
import './CreatePost.css';
import axios from 'axios'; // <-- Import
import { useAuth } from '../context/AuthContext'; // <-- Import

// 1. Receive the 'onPostCreated' prop
function CreatePost({ onPostCreated }) {
  const [post_text, set_post_text] = useState('');
  const { user_token } = useAuth(); // <-- Get the user's token

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user_token) {
      console.error('No token found, cannot post');
      return;
    }

    try {
      // 2. Create a 'config' object for the headers
      const config = {
        headers: {
          'x-auth-token': user_token // Send the token
        }
      };

      // 3. Send the post text AND the config
      await axios.post("https://linkedin-clone-backend-sqvx.onrender.com/api/posts", { text: post_text }, config);

      set_post_text(''); // Clear the box
      onPostCreated(); // 4. Call the refresh function!

    } catch (error) {
      console.error('Error creating post:', error.response.data);
    }
  };

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <textarea
          rows="3"
          placeholder="What's on your mind?"
          value={post_text}
          onChange={(e) => set_post_text(e.target.value)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;