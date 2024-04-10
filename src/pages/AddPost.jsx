// pages/AddPost.jsx

import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body });
      alert('Post added successfully');
      // Reset form fields
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error adding post:', error);
      alert('Failed to add post');
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="body">Description:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
