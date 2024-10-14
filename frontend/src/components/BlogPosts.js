import React, { useEffect, useState } from 'react';

import PostForm from './postForm';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editPostId, setEditPostId] = useState(null);
  const [formData, setFormData] = useState({ title: '', content: '' });

  // Fetch posts from the backend
  const fetchPosts = () => {
    fetch('http://localhost:3000/api/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create a new post
  const createPost = (postData) => {
    fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
    .then(() => fetchPosts())  // Refresh post list after creation
    .catch((error) => console.error('Error creating post:', error));
  };

  // Update an existing post
  const updatePost = (postData) => {
    fetch(`http://localhost:3000/api/posts/${editPostId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
    .then(() => {
      setEditPostId(null);  // Clear edit mode
      fetchPosts();         // Refresh post list after update
    })
    .catch((error) => console.error('Error updating post:', error));
  };

  // Delete a post
  const deletePost = (postId) => {
    fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: 'DELETE',
    })
    .then(() => fetchPosts())  // Refresh post list after deletion
    .catch((error) => console.error('Error deleting post:', error));
  };

  // Prepare form for editing a post
  const handleEdit = (post) => {
    setEditPostId(post.id);
    setFormData({ title: post.title, content: post.content });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>

      {/* Form for Creating and Updating Posts */}
      <PostForm 
        onSubmit={editPostId ? updatePost : createPost} 
        initialData={formData}
        postId={editPostId} 
      />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
