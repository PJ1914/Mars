import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/marsp.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-container'>
      <nav className='nav'>
        <img src={logo} alt="logo" className="logo" />
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li><Link to='/' onClick={handleToggle}>Home</Link></li>
          <li><Link to='/about' onClick={handleToggle}>About us</Link></li>
          <li><Link to='/projects' onClick={handleToggle}>Projects</Link></li>
          <li><Link to='/partners' onClick={handleToggle}>Partners</Link></li>
          <li><Link to='/human-on-mars' onClick={handleToggle}>Human on Mars</Link></li>
          <li><Link to='/news' onClick={handleToggle}>News</Link></li>
          <li><Link to='/technology' onClick={handleToggle}>Technology</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
