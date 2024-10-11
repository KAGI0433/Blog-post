import React, { useState, useEffect } from 'react';

const NewPost = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedPosts = posts.map(post =>
        post.id === editId ? { ...post, title, description } : post
      );
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    } else {
      const newPost = {
        id: Date.now(),
        title,
        description,
        author: 'Anonymous'  // Assuming a static author for simplicity
      };
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }

    // Reset form
    setTitle('');
    setDescription('');
    setEditId(null);
  };

  return (
    <div className="container mt-5">
      <h3 className="my-3">Tell us what you heard...</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Post</button>
      </form>
    </div>
  );
};

export default NewPost;
