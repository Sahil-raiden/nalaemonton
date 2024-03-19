import React, { useState, useEffect } from 'react';
import './assets/css/navBar.css';
import logo from './assets/image/logo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  return (
    <div className={`header ${isActive ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <FaBars className='menu-icon' onClick={toggleNavbar} />
      <ul className={`nav_bar ${isActive ? 'active' : ''}`} onMouseLeave={closeNavbar}>
        <li><a href="/">Home</a></li>
        <li><a href="/Service">Service</a></li>
        <li><a href="/academy">Academy</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
      <div className={`navbar-logo ${scrolled ? 'scrolled' : ''}`}>
        <img src={logo} alt="Company Logo" />
      </div>
    </div>
  );
};

export default Navbar;
