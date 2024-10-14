import React, { useState, useEffect } from 'react';

const PostForm = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:3000/api/posts');
        const data = await response.json();
        setPosts(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { user_id: 1, title, content }; 
        if (editing) {
            await fetch(`http://localhost:3000/api/posts/${editing}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });
        } else {
            await fetch('http://localhost:3000/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });
        }
        setTitle('');
        setContent('');
        setEditing(null);
        fetchPosts();
    };

    const handleEdit = (post) => {
        setTitle(post.title);
        setContent(post.content);
        setEditing(post.id);
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/api/posts/${id}`, { method: 'DELETE' });
        fetchPosts();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
                <button type="submit">{editing ? 'Update' : 'Create'} Post</button>
            </form>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <button onClick={() => handleEdit(post)}>Edit</button>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostForm;
