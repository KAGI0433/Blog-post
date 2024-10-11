import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Individualpost = () => {
  const { id } = useParams();  // Get post ID from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const foundPost = storedPosts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p>{post.description}</p>
      {/* <img src={post.image} alt={post.title} /> */}
    </div>
  );
};

export default Individualpost;
