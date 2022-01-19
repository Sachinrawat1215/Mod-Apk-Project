import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="../Images/logo.png" alt="" />
                <h2>ModHUB</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Trending</Link></li>
                    <li><Link to="/">Games</Link></li>
                    <li><Link to="/">Premium</Link></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" />
                <i className="fas fa-search"></i>
            </div>
        </header>
    )
}

export default Header