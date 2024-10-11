import React from 'react';
import './Header.css'; // Import your CSS file
import ladyImg from "../assets/lady.jpg"
import { useNavigate } from 'react-router-dom';


const Header = () => { 
  const navigate = useNavigate(); // Hook to navigate between routes

  return (
    <header className="header">
      <div className="header_image">
        <img src={ladyImg} alt="Logo" className='header-image' />
      </div>

      <nav>
        <ul className="nav-list">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/NewPost')}>New posts</li>
          <li onClick={() => navigate('/About')}>About us</li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
