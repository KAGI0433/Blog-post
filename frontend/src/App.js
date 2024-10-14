// src/App.js
import React from 'react';
import Posts from './Posts';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Individualposts from './components/Individualposts';
import NewPost from './components/NewPost';
import About from './components/About';
import BlogPosts from './components/BlogPosts';


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/post/:id" element={<Individualposts />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogposts" element={<BlogPosts />} /> {/* New Route for BlogPosts */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
