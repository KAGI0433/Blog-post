import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import briiImg from '../src/assets/brii.jpg';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <h1>Lady Whistledown</h1>
      <div className="mainImg">
        <img src={briiImg} alt="" className="hero-image" width="981" height="528" />
      </div>
      <h2> Latest Post</h2>

      <div className="container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <section key={post.id}>
              <div className="card">
                <div className="card-content">
                  <h3>{post.title}</h3>
                  <p>{post.description.substring(0, 100)}...</p> {/* Show a snippet */}
                  <Link to={`/post/${post.id}`}>
                    <button>Read More</button>
                  </Link>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
              </div>
            </section>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
