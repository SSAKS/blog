import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
  <h1 className="logo">Sakshi's BLOG</h1>
  <nav className="nav">
    <a href="#" className="nav-item">Home</a><br/>
    <a href="#" className="nav-item">About Me</a><br/>
    <a href="#" className="nav-item">Blog</a><br/>
    <a href="#" className="nav-item">Articles</a><br/>
    <a href="#" className="nav-item">Contact</a><br/>
  </nav>
</header>
    );
  }
  


export default Header;
