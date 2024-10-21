import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import brigImg from '../src/assets/brig.jpg';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://localhost:3000/posts');  
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete post with id: ${id}`); 
  
      
      const response = await fetch(`https://localhost:3000/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Post deleted successfully'); 
        
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
      } else {
        console.error('Failed to delete post', response.status); 
      }
    } catch (error) {
      console.error('Error deleting post:', error); 
    }
  };
  

  return (
    <div>
      <h1>Lady Whistledown</h1>
      <div className="mainImg">
        <img src={brigImg} alt="" className="hero-image" width="981" height="528" />
      </div>
      <h2>Latest Post</h2>

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
