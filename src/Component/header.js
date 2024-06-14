import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Sakshi's Blog</h1>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"></link>
            <nav className="nav">
                <a href="#" className="nav-item">Home</a>
                <a href="#" className="nav-item">About Me</a>
                <a href="#" className="nav-item">Blog</a>
                <a href="#" className="nav-item">Articles</a>
                <a href="#" className="nav-item">Contact</a>
            </nav>
        </header>
        
    );
}

export default Header;
