// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ladyImg from "../assets/lady.jpg"
const Header = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  return (
    <header>
         
         <div className="">
        <img src={ladyImg} alt=""  />
      </div>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/NewPost')}>New posts</li>
          <li onClick={() => navigate('/individualposts')}>Individual Posts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
