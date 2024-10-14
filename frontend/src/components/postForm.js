import React, { useState, useEffect } from 'react';

const PostForm = ({ onSubmit, initialData = { title: '', content: '' }, postId }) => {
  const [title, setTitle] = useState(initialData.title);
  const [content, setContent] = useState(initialData.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { title, content };
    onSubmit(postData);
  };

  useEffect(() => {
   
    setTitle(initialData.title);
    setContent(initialData.content);
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Content</label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">{postId ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default PostForm;