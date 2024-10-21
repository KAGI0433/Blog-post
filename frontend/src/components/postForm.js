
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
    // Update form fields if initialData changes (useful for edit form)
    setTitle(initialData.title);
    setContent(initialData.content);
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}className="form-container" >
      <div>
        <input className='title'
          type="text" 
          placeholder="Title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div >
        <textarea className='content'
          value={content} 
           placeholder="content"
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">{postId ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default PostForm;
