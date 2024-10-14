// src/App.js
import React from 'react';
import Posts from './Posts';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Individualposts from './components/Individualposts';
import NewPost from './components/NewPost';
import About from './components/About'
import BlogPosts from './components/BlogPosts';
const App = () => {
  return (
    <div>
      <Router> {/* Wrap the entire app in Router */}
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/NewPost" element={<NewPost />} />
          <Route path="/post/:id" element={<Individualposts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </Router>
      <BlogPosts />
    
    </div>
  );
};

export default App;
