import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="logo">Logo</div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`menu-links ${isOpen ? 'open' : ''}`}>
        <Link className="styled-link" to="/" onClick={toggleMenu}>Home</Link>
        <Link className="styled-link" to="/about" onClick={toggleMenu}>About</Link>
        <Link className="styled-link" to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Menu;
