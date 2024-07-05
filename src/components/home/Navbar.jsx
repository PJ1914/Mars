// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='nav'>
      <h2>Mars Production</h2>
      <ul>
        <li><Link to='/' id='home'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/partners'>Partners</Link></li>
        <li><Link to='/human-on-mars'>Human on Mars</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/technology'>Technology</Link></li>
      </ul>
    </div>
  );
}
