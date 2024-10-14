import React, { useEffect, useState } from 'react';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    fetch('http://localhost:3000/api/posts')  // Your backend API URL
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Store the fetched posts in state
        setLoading(false); // Turn off loading once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false); // Handle errors gracefully
      });
  }, []);  // Empty dependency array means this runs once after the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Display loading message while fetching
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
