import React, { useState, useEffect } from 'react';

const PostForm = ({ onSubmit, initialData = { title: '', content: '' }, postId }) => {
    const [title, setTitle] = useState(initialData.title);
    const [content, setContent] = useState(initialData.content);

    useEffect(() => {
        setTitle(initialData.title);
        setContent(initialData.content);
    }, [initialData]); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { title, content };  
        onSubmit(postData);  
        setTitle(''); 
        setContent(''); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title" 
                required 
            />
            <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Content" 
                required 
            />
            <button type="submit">{postId ? 'Update' : 'Create'} Post</button>
        </form>
    );
};

export default PostForm;
