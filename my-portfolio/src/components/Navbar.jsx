import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='portfolio-links'>
      <ul>
        <li><a href="#about">HOME</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
